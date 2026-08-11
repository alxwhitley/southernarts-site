// Single NAP + hours source of truth. Utility bar, footer, location block,
// and JSON-LD schema all read from here — never hardcode these values
// elsewhere. See structure.md's "Site-wide technical notes."

export const business = {
  name: "Southern Dental Arts",
  doctor: {
    name: "Dr. Ryan K. Staehling",
    credential: "DDS",
  },
  phone: {
    display: "(919) 706-0565",
    href: "tel:+19197060565",
  },
  address: {
    line1: "6500 Creedmoor Rd, Ste 204",
    city: "Raleigh",
    state: "NC",
    zip: "27613",
    // structure.md open item: verify against the client before flagging as final.
    full: "6500 Creedmoor Rd, Ste 204, Raleigh, NC 27613",
  },
  // pages/home-copy.md open item: verify at build time against the client, not just GBP.
  hours: [
    { days: "Monday – Thursday", time: "8:00 AM – 4:30 PM" },
    { days: "Friday", time: "8:00 AM – 1:00 PM" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  // pages/home-copy.md open item: verify these figures live at build time.
  reviews: {
    rating: 4.8,
    count: 67,
    source: "Google",
  },
  social: {
    // structure.md open item: no social URLs captured yet from discovery.
    // Left empty deliberately — Footer omits the row rather than
    // rendering placeholder links.
  },
} as const;
