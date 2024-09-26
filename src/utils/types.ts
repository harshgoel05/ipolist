export interface IPO {
  id: string; // Unique ID of the IPO
  status: string; // Current status of the IPO (e.g., open, closed)
  slug: string; // URL-friendly identifier
  name: string; // Name of the company issuing the IPO
  type: string; // Type of IPO (e.g., SME)
  startDate: string; // Date when the IPO starts
  endDate: string; // Date when the IPO ends
  isDateFinal: boolean; // Indicates if the IPO dates are final
  listingDate: string; // Date when the IPO will be listed on the stock exchange
  priceRange: PriceRange; // Price range for the IPO shares
  minQty: number; // Minimum quantity of shares to buy
  sizePerLot: number; // Number of shares per lot
  issueSize: string; // Total size of the IPO issue
  gmpDetails: GmpDetails; // Details about the grey market premium
  applyRecommendation: boolean | null; // Recommendation for applying to the IPO (true - recommended, false - not recommended, null - no recommendation)
  lastUpdatedAt: string; // Date when the IPO data was last updated
  createdAt: string; // Date when the IPO data was created
  infoUrl: string; // Link to more information about the IPO
  companyDescription: string; // Description of the company
  symbol: string; // Stock symbol
  logo: string; // URL to the logo image of the company
  prospectusUrl: string; // URL to download the IPO prospectus
  schedule: Event[]; // List of events and their respective dates
  quota: Quota; // Quota details for the IPO
}

export interface PriceRange {
  min: number; // Minimum price in the range
  max: number; // Maximum price in the range
}

export interface Event {
  event: string; // Description of the event (e.g., issue_open, listing_date)
  date: string; // Date when the event occurs
  eventTitle: string; // Title of the event
}

export interface GmpDetails {
  gmpTimeline: GmpTimeline[]; // Timeline of GMP updates
  latestGmpPrice: number; // Latest GMP price
  isGmpActivated: boolean; // Indicates if the GMP is active
}

export interface GmpTimeline {
  event: string; // Event description
  date: string; // Event date
}

export interface Quota {
  retailQuota: QuotaApplication; // Retail quota for the IPO
  qibQuota: QuotaApplication; // Qualified institutional buyer (QIB) quota for the IPO
  shniQuota: QuotaApplication; // Small high net-worth individual (SHNI) quota for the IPO
  bHNIQuota: QuotaApplication; // Big high net-worth individual (BHNI) quota for the IPO
}

export interface QuotaApplication {
  offeredShares: number; // Number of shares offered in the IPO
  appliedShares: number; // Number of shares applied for in the IPO
  minLotSizePerApplication: number; // Minimum lot size per application
  maxLotSizePerApplication: number; // Maximum lot size per application
}
