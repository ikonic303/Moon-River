// Duplicate auto-generated blog posts, consolidated in October 2026.
// The auto-blog cron had no repeat-topic check, so it published several near-identical
// articles per topic. Each retired slug (key) now 301-redirects to the one version that
// was kept (value): Google-indexed first, then the most complete article.
// The posts themselves stay in Redis untouched; they are only hidden from the site.
// Keep this list in sync with the /blog/* redirects in vercel.json.
export const MERGED_POSTS = {
  // -> Stamped vs. Broom-Finished Patios: Choosing for Your Brighton Yard
  'stamped-vs-broom-finish-patios-brighton-yard': 'stamped-vs-broom-finished-patios-choosing-brighton-yard',
  'stamped-vs-broom-finished-concrete-patios-brighton': 'stamped-vs-broom-finished-patios-choosing-brighton-yard',
  'stamped-vs-broom-finished-concrete-patios-brighton-2': 'stamped-vs-broom-finished-patios-choosing-brighton-yard',
  'stamped-vs-broom-finished-concrete-patios-brighton-guide': 'stamped-vs-broom-finished-patios-choosing-brighton-yard',
  // -> Repair or Replace? A Brighton Homeowner's Guide to Concrete Driveway Decisions
  'repair-or-replace-concrete-driveway-brighton-co': 'repair-replace-brighton-concrete-driveway-guide',
  'repair-replace-brighton-concrete-driveway': 'repair-replace-brighton-concrete-driveway-guide',
  // -> Artificial Turf vs. Natural Grass: A Brighton Homeowner's Guide
  'artificial-turf-vs-natural-grass-brighton-yard-guide': 'artificial-turf-vs-natural-grass-brighton-homeowners-guide',
  'artificial-turf-vs-natural-grass-front-range-yards': 'artificial-turf-vs-natural-grass-brighton-homeowners-guide',
  // -> Building Strong: Essentials of a Durable Retaining Wall in Brighton, CO
  'building-resilient-retaining-wall-brighton-homeowners-guide': 'building-strong-essentials-durable-retaining-wall-brighton-co',
  'the-secrets-to-a-long-lasting-retaining-wall-in-brighton-co': 'building-strong-essentials-durable-retaining-wall-brighton-co',
  // -> Choosing a Reliable Contractor in Brighton: Your Essential Guide
  'choosing-reliable-contractor-brighton-guide': 'choosing-reliable-contractor-brighton-essential-guide',
  'choosing-reliable-local-contractor-brighton-co': 'choosing-reliable-contractor-brighton-essential-guide',
  // -> Essential Questions for Hiring Concrete & Remodeling Crews in Brighton, CO
  'essential-questions-hiring-concrete-remodeling-crews-brighton-co': 'essential-questions-hiring-concrete-remodeling-crews-brighton-co-2',
  // -> Brighton Spring Refresh: Property Cleanup & Curb Appeal
  'brighton-spring-cleanup-curb-appeal-home-fresh-start': 'brighton-spring-refresh-property-cleanup-curb-appeal',
  'spring-into-action-brighton-property-cleanup-curb-appeal-guide': 'brighton-spring-refresh-property-cleanup-curb-appeal',
  // -> Choosing Your Perfect Floor: LVP, Tile, or Hardwood for Brighton Homes
  'lvp-tile-hardwood-brighton-flooring-guide': 'choosing-perfect-floor-lvp-tile-hardwood-brighton-homes',
  'lvp-vs-tile-vs-hardwood-choosing-brighton-home-flooring-2': 'choosing-perfect-floor-lvp-tile-hardwood-brighton-homes',
  // -> Battling Winter: Protecting Your Brighton Concrete from Freeze-Thaw Damage
  'guard-your-concrete-preventing-freeze-thaw-damage-brighton-co': 'battling-winter-protecting-brighton-concrete-freeze-thaw-damage',
  // -> Designing Your Ideal Deck & Outdoor Living Space in Brighton, CO
  'designing-dream-deck-outdoor-living-space-brighton-co': 'designing-ideal-deck-outdoor-living-space-brighton-co',
  // -> Mastering Interior Painting Prep: Secrets to a Lasting Finish
  'flawless-walls-interior-painting-prep-lasting-finish': 'mastering-interior-painting-prep-secrets-lasting-finish',
  // -> Brighton Xeriscape: Low-Water, Low-Maintenance Landscaping
  'planning-low-water-low-maintenance-landscape-brighton': 'brighton-xeriscape-low-water-low-maintenance-landscaping',
};

export function isMergedPost(slug) {
  return Object.prototype.hasOwnProperty.call(MERGED_POSTS, slug);
}
