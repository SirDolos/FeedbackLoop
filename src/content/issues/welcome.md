---
title: "Welcome to the newsletter"
dek: "How this site works, and how to publish your first real issue."
issueNumber: 0
pubDate: 2026-08-12
author: "The editors"
---

This is a starter issue so you can see how a published piece looks. Delete
this file once you've written your first real one.

## How to publish an issue

Every issue is a Markdown file in `src/content/issues/`. Add a new file —
for example `src/content/issues/replication-crisis.md` — with frontmatter
like this at the top:

```
---
title: "Your issue title"
dek: "A one-sentence summary shown on the homepage and archive."
issueNumber: 1
pubDate: 2026-08-19
author: "Your name"
---
```

Everything below the frontmatter is the body of the issue, written in
regular Markdown: `## headings`, **bold**, _italics_, [links](/about),
block quotes, and lists all work as you'd expect.

> A block quote looks like this — useful for pulling out a key finding or
> quoting a source directly.

The homepage always shows your most recent issue (by `pubDate`) as the lead
story, with the next three most recent alongside it. The full history lives
at `/issues`.

## A couple of notes

- Set `draft: true` in the frontmatter to keep an issue out of the
  published site while you're still drafting it.
- The `issueNumber` field is just for display — bump it by one each time.
- Once you're ready to collect subscribers for real, open
  [src/consts.ts](/) and swap in your Buttondown username. See
  `README.md` for the full walkthrough.
