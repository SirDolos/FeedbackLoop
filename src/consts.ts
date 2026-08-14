// Central place to rename the publication, update the tagline, or swap the
// subscribe form provider. Nothing else in the codebase should hardcode these.

export const SITE_TITLE = "FeedbackLoop";
export const SITE_TAGLINE =
  "Findings worth sitting with, from two people who read the primary sources.";
export const SITE_DESCRIPTION =
  "A research newsletter publishing original findings and analysis.";

export const AUTHORS = [
  { name: "Founder One", role: "Co-founder" },
  { name: "Founder Two", role: "Co-founder" },
];

// Buttondown's embeddable form posts to this endpoint. Create a free account
// at https://buttondown.com, then replace "your-username" below with the
// username from your Buttondown dashboard URL. See README.md for details.
export const BUTTONDOWN_USERNAME = "your-username";
export const SUBSCRIBE_ACTION = `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`;
