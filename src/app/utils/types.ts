export interface PriceRange {
  min: number | null;
  max: number | null;
}

export interface ScheduleEvent {
  event: string;
  date: string;
  eventTitle: string;
}

export interface IPODetails {
  issueSize: string | null;
  sizePerLot: number | null;
  schedule: ScheduleEvent[];
  about: string;
  min_investment: number | null;
  strengths: string[];
  risks: string[];
}

export interface GMPEntry {
  date: string;
  price: number | null;
}

export interface IPO {
  logoUrl: string;
  link: string;
  symbol: string;
  name: string;
  startDate: string | null;
  endDate: string | null;
  listingDate: string | null;
  priceRange: PriceRange;
  slug: string;
  gmpUrl: string | null;
  details: IPODetails;
  gmpTimeline: GMPEntry[] | null;
}
