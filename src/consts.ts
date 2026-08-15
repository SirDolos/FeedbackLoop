// Central place to rename the publication, update the tagline, or swap the
// subscribe form provider. Nothing else in the codebase should hardcode these.

export const SITE_TITLE = "FeedbackLoop";
export const SITE_TAGLINE =
  "Findings worth sitting with, from two people who read the primary sources.";
export const SITE_DESCRIPTION =
  "A research newsletter publishing original findings and analysis.";

export const AUTHORS = [
  {
    name: "Santiago Mosca",
    role: "Co-founder",
    photo: "/images/santi-mosca.jpg",
    bio: "Santi is currently a sophomore at UW-Madison studying Finance and Data Science. His interest in finance traces back to caddying at Chicago Golf Club, where a conversation with an investment banker first sparked his curiosity about the industry.",
  },
  {
    name: "Clifton Warder",
    role: "Co-founder",
    photo: "/images/clifton-warder.jpg",
    bio: "Clifton is a Finance, Investment, and Banking student at the University of Wisconsin-Madison, where he is also pursuing Real Estate and Urban Land Economics and an Accounting Certificate. He has experience in commercial real estate, capital management, government, and hedge funds. In his free time, he is an avid fisherman and hunter who loves exploring the outdoors.",
  },
];

// Buttondown's embeddable form posts to this endpoint. Create a free account
// at https://buttondown.com, then replace "your-username" below with the
// username from your Buttondown dashboard URL. See README.md for details.
export const BUTTONDOWN_USERNAME = "santiagomosca";
export const SUBSCRIBE_ACTION = `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`;
