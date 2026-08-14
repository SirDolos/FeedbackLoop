import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
  const issues = await getCollection("issues", ({ data }) => !data.draft);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: issues.map((issue) => ({
      title: issue.data.title,
      description: issue.data.dek,
      pubDate: issue.data.pubDate,
      link: `/issues/${issue.id}/`,
    })),
  });
}
