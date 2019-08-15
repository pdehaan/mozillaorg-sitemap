#!/usr/bin/env node

const { checkLinks, localeSitemap } = require("./lib");

const argv = process.argv.slice(2);

main(...argv);

async function main(locale = "en-US") {
  const sitemap = await localeSitemap(locale);
  console.log(JSON.stringify(sitemap, null, 2));

  if (argv.includes("--check")) {
    const res = await checkLinks(sitemap.sitemap);
    if (res.top.length) {
      console.log(JSON.stringify(res.top, null, 2));
      process.exit(1);
    }
    console.log("No broken links found");
    process.exit(0);
  }
}
