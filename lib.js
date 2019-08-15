const axios = require("axios");
const check = require("check-broken-links");

const MAX_LINKS = process.env.MAX_LINKS || 5000;
const ORIGIN = process.env.ORIGIN || "https://mozilla.org";

module.exports = {
  checkLinks,
  localeSitemap,
  ORIGIN
};

async function localeSitemap(locale = "en-US", jsonSitemapURI = "sitemap.json") {
  const sitemapUri = new URL(jsonSitemapURI, ORIGIN).href;
  const res = await axios.get(sitemapUri);

  return _localeSitemap(res.data, locale);
}

function _localeSitemap(sitemap, locale, origin = ORIGIN) {
  const links = Object.entries(sitemap)
    .filter(([, locales]) => locales.includes(locale))
    .map(([page]) => new URL(locale + page, origin).href)
    .sort()
    .slice(0, MAX_LINKS);

  return {
    locale,
    origin,
    sitemap: links
  };
}

async function checkLinks(sitemap = [], origin = ORIGIN) {
  return check(origin, sitemap);
}
