const axios = require("axios");
const check = require("check-broken-links");

const MAX_LINKS = process.env.MAX_LINKS || 5000;
const ORIGIN = "https://www.mozilla.org";

module.exports = {
  checkLinks,
  localeSitemap,
  ORIGIN,
};

async function localeSitemap(locale="en-US", jsonSitemapURI="sitemap.json") {
  const sitemapUri = new URL(jsonSitemapURI, ORIGIN).href;
  const res = await axios.get(sitemapUri);

  return {
    locale,
    origin: ORIGIN,
    sitemap: _localeSitemap(res.data, locale, ORIGIN)
  };
}

function _localeSitemap(sitemap, locale, origin) {
  return Object.entries(sitemap)
    .filter(([, locales]) => locales.includes(locale))
    .map(([page]) => new URL(locale + page, origin).href)
    .sort()
    .slice(0, MAX_LINKS);
}

async function checkLinks(sitemap=[], origin=ORIGIN) {
  return check(origin, sitemap);
}
