const fs = require("fs");
const globby = require("globby");

async function generateSiteMap() {
  console.log(`Generating sitemap`);
  const pages = await globby([
    "pages/**/**.tsx",
    "!pages/_*.tsx",
    "!pages/**/[slug].tsx",
    "!pages/api",
    "!posts/*.mdx",
  ]);

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map((page) => {
              const path = page
                .replace("pages", "")
                .replace(".ts", "")
                .replace(".mdx", "");
              const route = path === "/index" ? "" : path;

              return `
                      <url>
                          <loc>${`https://www.miravicson.com${route}`}</loc>
                      </url>
                  `;
            })
            .join("")}
      </urlset>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSiteMap();
