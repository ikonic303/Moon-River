// Content for the dedicated service pages (/services/concrete, /services/sprinkler-repair,
// /services/sod-installation). Rendered by ServicePage.jsx.
//
// Keep this factual: every claim here comes from the existing site copy, the business's
// real Google reviews (quoted word for word, first name + last initial), or general
// Front Range guidance that also appears in the blog. No prices, warranties, licence
// numbers or years-in-business unless the owner supplies them.

export const SERVICE_PATHS = {
  concrete: '/services/concrete',
  sprinkler: '/services/sprinkler-repair',
  sod: '/services/sod-installation',
};

// Core tier from lib/service-area-towns.json (within 15 miles of Brighton).
export const CORE_TOWNS = [
  { name: 'Brighton',      slug: 'brighton' },
  { name: 'Lochbuie',      slug: 'lochbuie' },
  { name: 'Commerce City', slug: 'commerce-city' },
  { name: 'Fort Lupton',   slug: 'fort-lupton' },
  { name: 'Hudson',        slug: 'hudson' },
  { name: 'Dacono',        slug: 'dacono' },
  { name: 'Thornton',      slug: 'thornton' },
  { name: 'Northglenn',    slug: 'northglenn' },
  { name: 'Erie',          slug: 'erie' },
];

const REVIEWS = {
  christina: {
    name: 'Christina T.',
    text: 'Joshua installed approximately 750 square feet of sod and spread 4½ tons of topsoil, all while working tirelessly in 100-degree heat.',
  },
  jevan: {
    name: 'Jevan S.',
    text: 'Very happy with how the yard turned out! They said it would take 3 days and they were done in 2 with the same result.',
  },
  jesus: {
    name: 'Jesus G.',
    text: 'Joshua is great to work with. He has excellent communication, is very attentive, professional, and reliable.',
  },
};

export const SERVICE_PAGES = {
  concrete: {
    key: 'concrete',
    path: SERVICE_PATHS.concrete,
    name: 'Concrete',
    serviceType: 'Concrete contractor',
    title: 'Concrete Driveways, Patios & Repairs | Brighton, CO',
    description: 'Concrete driveways, walkways, patios, small pours and repairs in Brighton, CO and nearby towns. Broom or stamped finish. Free on-site quotes.',
    heroImage: '/assets/photo-concrete.jpg',
    heroPosition: 'center 55%',
    ogImage: '/assets/photo-concrete.jpg',
    eyebrow: 'Concrete & Flatwork',
    h1: 'Concrete Driveways, Patios & Repairs in Brighton, CO',
    intro: 'Driveways, walkways, patios, small pours and repairs for homeowners, property managers and realtors across the Brighton area. We pour clean, level work that holds up to Colorado seasons, and we look at your site in person before we put a number on it.',
    itemsHeading: 'What we pour and repair',
    itemsIntro: 'Residential and property-management concrete, from a single pad to a full driveway or patio.',
    items: [
      { t: 'Driveways & walkways', d: 'New driveways, sidewalks and walkways, plus replacement of sections that have cracked, heaved or settled past repair.' },
      { t: 'Patios & flatwork', d: 'Patios and slabs with a broom or stamped finish, for backyards, side yards and outdoor living space.' },
      { t: 'Small pours & pads', d: 'Pads and small slabs, from a single small pour on up. Small jobs are welcome.' },
      { t: 'Concrete repairs', d: 'Repair where repair makes sense, replacement where it doesn’t, and a straight answer about which one you’re looking at.' },
    ],
    info: {
      eyebrow: 'Front Range Conditions',
      heading: 'What decides whether concrete lasts here',
      paragraphs: [
        'Concrete along the Front Range takes a beating: freeze-thaw cycles all winter, de-icing salt, strong sun at altitude and, in parts of the region, clay soils that swell and shrink with moisture.',
        'Most of what decides how a slab holds up happens before the finish goes on: a compacted base, drainage that moves water away instead of under it, control joints placed where cracks would otherwise pick their own spot, and time to cure properly.',
        'That’s why we come out and look first. How the ground sits, where water goes and what’s already there decide most of what a concrete job costs, and none of that survives a phone description.',
      ],
      image: '/assets/photo-walkway.jpg',
      imageAlt: 'Concrete walkway along a side yard',
    },
    guides: [
      { slug: 'repair-replace-brighton-concrete-driveway-guide', title: 'Repair or Replace? A Brighton Homeowner’s Guide to Concrete Driveway Decisions' },
      { slug: 'stamped-vs-broom-finished-patios-choosing-brighton-yard', title: 'Stamped vs. Broom-Finished Patios: Choosing for Your Brighton Yard' },
      { slug: 'battling-winter-protecting-brighton-concrete-freeze-thaw-damage', title: 'Battling Winter: Protecting Your Brighton Concrete from Freeze-Thaw Damage' },
      { slug: 'essential-questions-hiring-concrete-remodeling-crews-brighton-co-2', title: 'Essential Questions for Hiring Concrete & Remodeling Crews in Brighton, CO' },
    ],
    reviews: [REVIEWS.jesus, REVIEWS.jevan],
    faqs: [
      { q: 'Do you take small concrete jobs?', a: 'Yes. We take everything from a single pad or repair up to full driveways and patios. Small pours are welcome.' },
      { q: 'Should I repair or replace my concrete?', a: 'It depends on why it failed. Surface wear and isolated cracks can often be repaired; slabs that have heaved, settled or broken up across a large area usually need to be replaced. We’ll look at it in person and tell you which one you’re dealing with.' },
      { q: 'Do you do stamped concrete or just broom finish?', a: 'Both. A broom finish is the simple, slip-resistant standard for driveways and walkways. Stamped concrete adds pattern and texture, and is a common choice for patios and outdoor living areas.' },
      { q: 'How much does a concrete driveway or patio cost?', a: 'It depends on size, access, the base and drainage, whether old concrete has to come out, and the finish. That’s why we quote after seeing the site instead of over the phone. The quote is free and there’s no obligation.' },
      { q: 'What areas do you serve for concrete work?', a: 'We’re based in Brighton and work most weeks within about 15 miles: Lochbuie, Commerce City, Fort Lupton, Hudson, Dacono, Thornton, Northglenn and Erie. The rest of the Front Range is listed on our service area page.' },
    ],
    ctaHeading: 'Need concrete work in the Brighton area?',
  },

  sprinkler: {
    key: 'sprinkler',
    path: SERVICE_PATHS.sprinkler,
    name: 'Sprinkler Repair',
    serviceType: 'Sprinkler system repair',
    title: 'Sprinkler Repair & Winterization | Brighton, CO',
    description: 'Sprinkler repair in Brighton, CO: broken lines, leaks, damaged heads, valve box work, coverage problems, spring start-ups and fall blowouts. Free quotes.',
    heroImage: '/assets/photo-sod.jpg',
    heroPosition: 'center 60%',
    ogImage: '/assets/photo-sprinkler.jpg',
    eyebrow: 'Irrigation Fixes',
    h1: 'Sprinkler Repair in Brighton, CO',
    intro: 'Broken lines, leaks, damaged heads, valve box work, seasonal start-ups and fall blowouts. We get your system running right so your yard stays healthy.',
    itemsHeading: 'What we fix',
    itemsIntro: 'Repairs and seasonal service for home and property-management irrigation systems.',
    items: [
      { t: 'Broken lines & leaks', d: 'Soggy spots, low pressure or a water bill that suddenly jumped usually point to a break. We find it and fix the line.' },
      { t: 'Damaged sprinkler heads', d: 'Heads that are broken, stuck, sunk below the grass or watering the sidewalk instead of the lawn.' },
      { t: 'Valve box work', d: 'Valve and valve box problems, including zones that won’t turn on or won’t shut off.' },
      { t: 'Coverage problems', d: 'Brown edges and dry patches usually come from gaps in coverage, not too little run time.' },
      { t: 'Seasonal start-up & blowout', d: 'Spring start-ups, and fall winterization before the first hard freeze.' },
      { t: 'System troubleshooting', d: 'When something is off and you can’t tell what, we track it down.' },
    ],
    info: {
      eyebrow: 'Front Range Conditions',
      heading: 'Why sprinkler systems fail here',
      paragraphs: [
        'Colorado winters are hard on irrigation. Water left in lines, valves and the backflow preventer can freeze, expand and crack them, which is why Front Range systems get blown out with compressed air before the first hard freeze.',
        'Summer brings the opposite problem. Out on the plains around Brighton there is little shade or windbreak, lawns dry out from the edges in, and irrigation coverage matters more than irrigation volume. Turning up the run time rarely fixes a coverage gap; fixing the heads does.',
        'We come out and look at the system, because the cause of a wet spot or a dead zone is usually underground or hidden in the layout, not something you can diagnose over the phone.',
      ],
      image: '/assets/photo-sprinkler.jpg',
      imageAlt: 'Irrigation backflow preventer on the side of a house',
    },
    guides: [
      { slug: 'essential-sprinkler-winterization-brighton-homeowners', title: 'Essential Sprinkler Winterization for Brighton Homeowners' },
      { slug: 'beat-the-drought-spotting-sprinkler-problems-early-brighton-co', title: 'Beat the Drought: Spotting Sprinkler Problems Early in Brighton, CO' },
      { slug: 'colorado-fall-home-maintenance-essential-front-range-checklist', title: 'Colorado Fall Home Maintenance: Your Essential Front Range Checklist' },
    ],
    reviews: [REVIEWS.jesus, REVIEWS.jevan],
    faqs: [
      { q: 'When should I winterize my sprinkler system?', a: 'Before the first hard freeze. Along the Front Range that can come as early as late September or hold off until November, so earlier is safer than later.' },
      { q: 'Do you repair broken lines and leaks?', a: 'Yes. Broken lines, leaks and damaged heads are all part of our sprinkler repair work, along with valve box work and general troubleshooting.' },
      { q: 'Why does my lawn have dry spots even though I water a lot?', a: 'Usually it’s coverage, not volume. A tilted, clogged or broken head leaves a gap that more run time won’t fill. On open lots around Brighton, lawns tend to dry out from the edges in, so coverage matters most.' },
      { q: 'Do you handle spring start-ups too?', a: 'Yes. We do seasonal start-ups in spring and blowouts in fall, and we can repair whatever the start-up turns up.' },
      { q: 'How does a sprinkler repair quote work?', a: 'Call (720) 807-0379 or send the quote form and we’ll usually get back to you the same day. The quote is free and there’s no obligation.' },
    ],
    ctaHeading: 'Sprinkler acting up?',
  },

  sod: {
    key: 'sod',
    path: SERVICE_PATHS.sod,
    name: 'Sod Installation',
    serviceType: 'Sod installation',
    title: 'Sod Installation in Brighton, CO | New Lawns & Repairs',
    description: 'Fresh sod installation in Brighton, CO for new lawns, curb-appeal upgrades, property turnovers and yard repairs. Local crew, free on-site quotes.',
    heroImage: '/assets/photo-edging.jpg',
    heroPosition: 'center 50%',
    ogImage: '/assets/photo-sod.jpg',
    eyebrow: 'Sod & Lawns',
    h1: 'Sod Installation in Brighton, CO',
    intro: 'Fresh sod for new lawns, curb-appeal upgrades, property updates and yard repairs. A good fit for homeowners refreshing a lawn and for realtors prepping a property for sale.',
    itemsHeading: 'What we install',
    itemsIntro: 'From a full lawn on bare ground to patching the spots other projects tore up.',
    items: [
      { t: 'New lawn installation', d: 'Bare or worn-out yards turned into finished lawns, with topsoil brought in where the ground needs it.' },
      { t: 'Curb-appeal upgrades', d: 'Replacing a patchy front lawn so the property looks cared for from the street.' },
      { t: 'Property turnovers', d: 'Lawn refreshes for rentals and listings, scheduled around a move-out or a listing date.' },
      { t: 'Yard repairs & patches', d: 'Patching dead or damaged areas, including ground torn up by sprinkler, concrete or other work.' },
    ],
    info: {
      eyebrow: 'Getting It to Take',
      heading: 'What makes new sod root',
      paragraphs: [
        'Sod is only as good as the ground under it. Grading that moves water away from the house, and soil the roots can actually grow into, matter as much as the sod itself.',
        'New sod needs steady water for the first few weeks while its roots knit into the soil below, which is why sprinkler coverage should be sorted out before the sod goes down, not after.',
        'Late summer into early fall is usually the easiest window for new sod to establish on the Front Range, with spring close behind. It can go down any time the ground isn’t frozen, as long as it gets enough water.',
      ],
      image: '/assets/photo-sod.jpg',
      imageAlt: 'Finished lawn in a fenced backyard',
    },
    guides: [
      { slug: 'the-optimal-time-to-lay-sod-in-colorados-front-range', title: 'The Optimal Time to Lay Sod in Colorado’s Front Range' },
      { slug: 'artificial-turf-vs-natural-grass-brighton-homeowners-guide', title: 'Artificial Turf vs. Natural Grass: A Brighton Homeowner’s Guide' },
      { slug: 'brighton-xeriscape-low-water-low-maintenance-landscaping', title: 'Brighton Xeriscape: Low-Water, Low-Maintenance Landscaping' },
    ],
    reviews: [REVIEWS.christina, REVIEWS.jevan],
    faqs: [
      { q: 'When is the best time to lay sod in Colorado?', a: 'Late summer into early fall is usually the easiest window, with spring close behind. Sod can go down any time the ground isn’t frozen, as long as it gets enough water while it establishes.' },
      { q: 'Do you prepare the soil before laying sod?', a: 'Yes, when the ground needs it. On one job that meant 4½ tons of topsoil along with about 750 square feet of sod.' },
      { q: 'Can you get a lawn ready before a listing or a move-in?', a: 'Yes. Sod gives you a finished lawn the day it goes down, which is why it works well for realtors prepping a listing and for property turnovers. Tell us your date when you ask for a quote.' },
      { q: 'Should I go with sod, artificial turf or xeriscape?', a: 'We install all three. Sod is real grass and needs regular watering; artificial turf and xeriscape cut water use and upkeep. Our blog guides compare them for Brighton yards.' },
      { q: 'How does a sod quote work?', a: 'We come out and look at the yard first, because grading, soil and drainage decide most of the cost. The quote is free and there’s no obligation.' },
    ],
    ctaHeading: 'Ready for a new lawn?',
  },
};

// Used by Post.jsx to point a blog article at the matching service page.
export function serviceForPost(post) {
  const hay = `${post?.slug || ''} ${post?.title || ''}`.toLowerCase();
  if (/sprinkler|irrigation/.test(hay)) return SERVICE_PAGES.sprinkler;
  if (/\bsod\b|natural grass|\blawn/.test(hay)) return SERVICE_PAGES.sod;
  if (/concrete|driveway|patio|flatwork/.test(hay)) return SERVICE_PAGES.concrete;
  return null;
}
