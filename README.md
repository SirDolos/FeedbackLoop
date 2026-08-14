# FeedbackLoop

A research newsletter site built with [Astro](https://astro.build). Issues
are Markdown files; the homepage, archive, and RSS feed are generated from
them automatically.

## Running locally

This project needs Node.js (installed via [nvm](https://github.com/nvm-sh/nvm)
on this machine). Each new terminal session needs nvm loaded once:

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Then, from the project folder:

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:4321`).

## Publishing an issue

Add a Markdown file to `src/content/issues/`, e.g.
`src/content/issues/my-second-issue.md`:

```markdown
---
title: "Your issue title"
dek: "A one-sentence summary shown on the homepage and archive."
issueNumber: 1
pubDate: 2026-08-19
author: "Your name"
---

Body of the issue, in Markdown.
```

- The homepage always shows the most recent issue (by `pubDate`) as the
  lead, with the next three alongside it.
- The full history lives at `/issues`.
- Set `draft: true` in the frontmatter to keep an issue unpublished while
  you're still writing it.
- Delete `src/content/issues/welcome.md` once you've published something
  real — it's just a starter example.

## Renaming the site

Everything specific to your publication — its name, tagline, author bios,
and the subscribe form endpoint — lives in [`src/consts.ts`](src/consts.ts).
Edit that one file rather than hunting through pages.

The visual identity (colors, fonts) lives in
[`src/styles/global.css`](src/styles/global.css) as CSS custom properties
under `:root`, with a dark-mode override below it.

## Connecting a subscribe form (Buttondown)

The subscribe form is already wired for [Buttondown](https://buttondown.com),
a simple newsletter-sending service with a free tier:

1. Create an account at buttondown.com.
2. Find your username in your dashboard URL
   (`https://buttondown.com/settings/YOUR-USERNAME`).
3. Open `src/consts.ts` and replace `BUTTONDOWN_USERNAME` with it.
4. Restart the dev server. Submitting the form now adds real subscribers.
5. When you're ready to send an issue, paste its content into Buttondown's
   composer and send — the site and the email are separate; publishing here
   doesn't automatically email anyone.

If you'd rather use a different provider (ConvertKit, Substack, Mailchimp,
etc.), replace the `<form>` in
[`src/components/SubscribeForm.astro`](src/components/SubscribeForm.astro)
with the embed code they give you.

## Deploying

This is a static site (`npm run build` outputs to `dist/`), so it runs
anywhere that serves static files. Two easy free options:

- **Vercel or Netlify** — connect the repo, they detect Astro automatically,
  every push deploys.
- **GitHub Pages** — needs a repo on GitHub and the `@astrojs/github-pages`
  adapter or a simple Actions workflow.

Once you've picked a host, update `site` in `astro.config.mjs` to your real
domain (needed for the RSS feed's links to be correct).
