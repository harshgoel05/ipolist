/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://theipolist.in",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000,
  // optional
};
