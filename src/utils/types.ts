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
  details: IPODetails | null;
  gmpTimeline: GMPEntry[] | null;
}

export interface IPODetailed extends IPO {
  minAmount: number | null;
  status: (typeof IPOStatus)[keyof typeof IPOStatus];
  latestGmp: number | null;
}

export enum IPOStatus {
  Upcoming = "Upcoming",
  Open = "Open",
  Closed = "Closed",
  Listed = "Listed",
  Unknown = "Unknown",
}

/*


[
    {
        "startDate": "2024-09-26T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/diffusion-engineers-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390722/diffusion-engineers",
        "endDate": "2024-09-30T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Diffusion-300x300.jpg",
        "listingDate": "2024-10-04T03:30:00Z",
        "priceRange": {
            "min": 159,
            "max": 168
        },
        "symbol": "DIFFNKG",
        "name": "Diffusion Engineers Ltd",
        "slug": "diffusion-engineers",
        "details": {
            "issueSize": "158cr",
            "sizePerLot": 88,
            "schedule": [
                {
                    "event": "issue-open-date",
                    "date": "2024-09-25T18:30:00Z",
                    "eventTitle": "Issue open date"
                },
                {
                    "event": "issue-close-date",
                    "date": "2024-09-29T18:30:00Z",
                    "eventTitle": "Issue close date"
                },
                {
                    "event": "upi-mandate-deadline",
                    "date": "2024-09-30T11:30:00Z",
                    "eventTitle": "UPI mandate deadline"
                },
                {
                    "event": "allotment-finalization",
                    "date": "2024-09-30T18:30:00Z",
                    "eventTitle": "Allotment finalization"
                },
                {
                    "event": "refund-initiation",
                    "date": "2024-10-02T18:30:00Z",
                    "eventTitle": "Refund initiation"
                },
                {
                    "event": "share-credit",
                    "date": "2024-10-02T18:30:00Z",
                    "eventTitle": "Share credit"
                },
                {
                    "event": "listing-date",
                    "date": "2024-10-03T18:30:00Z",
                    "eventTitle": "Listing date"
                },
                {
                    "event": "mandate-end-date",
                    "date": "2024-10-14T18:30:00Z",
                    "eventTitle": "Mandate end date"
                },
                {
                    "event": "lock-in-end-date-for-anchor-investors-(50%)",
                    "date": "2024-10-29T18:30:00Z",
                    "eventTitle": "Lock-in end date for anchor investors (50%)"
                },
                {
                    "event": "lock-in-end-date-for-anchor-investors-(remaining)",
                    "date": "2024-12-28T18:30:00Z",
                    "eventTitle": "Lock-in end date for anchor investors (remaining)"
                }
            ],
            "about": "Established in 1982, Diffusion Engineers Limited is engaged in the business of manufacturing welding consumables, wear plates and wear parts, and heavy engineering machinery for core industries like cement, steel, power, mining, engineering, oil \u0026 gas, sugar, etc. It provides specialized repairs and reconditioning services for heavy machinery and equipment. Additionally, It is also involved in the trading of anti-wear powders and welding and cutting machinery. It provides a super conditioning process at its manufacturing facilities, a surface treatment solution for machine components that enhances wear resistance, eliminates stress, and improves their repairability ultimately extending their lifespan and reducing production costs. Diffusion Engineers Limited has four manufacturing units located around Nagpur.",
            "min_investment": 14784,
            "strengths": [
                "The company has embarked on a forward integration journey, transitioning from a manufacturer of welding electrodes to producing flux-cored wires, wear plates, and wear parts, and now to heavy engineering, broadening its scope and expertise in the industry.",
                "The company serves a diverse clientele, which includes both OEMs who service major players in the cement, steel, and power sectors, as well as direct customers. These OEMs, in turn, service major players in their respective industries. This intricate network positions the company as a vital link in the OEM ecosystem of some of the major players in core industries.",
                "Over the years, The company on a standalone basis has grown from a single product to a multi-product manufacturing company. It has demonstrated consistent growth in terms of revenues and profitability.",
                "The company’s business operations in Nagpur, Maharashtra, boast a strategic location at the heart of the country as it ensures easy access to industries across the entire country, streamlined logistics for procurement, and timely delivery to its customers."
            ],
            "risks": [
                "The company is increasingly dependent on the domestic market for its sales. Any downturn in the domestic market could dent the company’s market share.",
                "The company had negative cash flows during certain fiscal years in its operating, investing, and financing activities. Sustained negative cash flows in the future would adversely affect the results of operations and financial condition.",
                "The company’s business is working capital intensive. Any insufficient cash flows from its operations or inability to borrow to meet its working capital requirements may materially and adversely affect the business.",
                "Conflict of interest may arise as some of the group companies and subsidiaries are authorized to carry on a similar line of business as the company which may lead to real or potential conflicts of interest for its promoters or directors."
            ]
        },
        "gmpTimeline": [
            {
                "date": "2024-09-29T13:39:45Z",
                "price": 90
            },
            {
                "date": "2024-09-26T18:30:00Z",
                "price": 90
            },
            {
                "date": "2024-09-25T18:30:00Z",
                "price": 80
            },
            {
                "date": "2024-09-24T18:30:00Z",
                "price": 75
            },
            {
                "date": "2024-09-23T18:30:00Z",
                "price": 65
            },
            {
                "date": "2024-09-22T18:30:00Z",
                "price": 65
            },
            {
                "date": "2024-09-21T18:30:00Z",
                "price": 0
            }
        ]
    },
    {
        "startDate": "2024-09-26T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/divyadhan-recycling-industries-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390707/divyadhan-recycling-industries",
        "endDate": "2024-09-30T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/DRIL-300x230.jpg",
        "listingDate": "2024-10-04T03:30:00Z",
        "priceRange": {
            "min": 60,
            "max": 64
        },
        "symbol": "DIVYADHAN",
        "name": "Divyadhan Recycling Industries",
        "slug": "divyadhan-recycling-industries",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-26T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/forge-auto-international-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390588/forge-auto-international",
        "endDate": "2024-09-30T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Forge-Auto-International-IPO-GMP-1-1-300x300.webp",
        "listingDate": "2024-10-04T03:30:00Z",
        "priceRange": {
            "min": 102,
            "max": 108
        },
        "symbol": "FORGEAUTO",
        "name": "Forge Auto International",
        "slug": "forge-auto-international",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-26T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/sahasra-electronics-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390868/sahasra-electronics-solutions",
        "endDate": "2024-09-30T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Sahasra-ipo-300x300.png",
        "listingDate": "2024-10-04T03:30:00Z",
        "priceRange": {
            "min": 269,
            "max": 283
        },
        "symbol": "SAHASRA",
        "name": "Sahasra Electronics Solutions",
        "slug": "sahasra-electronics-solutions",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-26T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/nexxus-petro-industries-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390940/nexxus-petro-industries",
        "endDate": "2024-09-30T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Nexxus-petro-ipo-300x300.png",
        "listingDate": "2024-10-04T03:30:00Z",
        "priceRange": {
            "min": 105,
            "max": 105
        },
        "symbol": "NEXXUS",
        "name": "Nexxus Petro Industries",
        "slug": "nexxus-petro-industries",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-27T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/saj-hotels-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/391058/saj-hotels",
        "endDate": "2024-10-01T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Saj-1-300x300.jpg",
        "listingDate": "2024-10-07T03:30:00Z",
        "priceRange": {
            "min": 65,
            "max": 65
        },
        "symbol": "SAJHOTELS",
        "name": "Saj Hotels",
        "slug": "saj-hotels",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-27T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/hvax-technologies-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/391065/hvax-technologies",
        "endDate": "2024-10-01T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/hvax-ipo-300x210.jpg",
        "listingDate": "2024-10-07T03:30:00Z",
        "priceRange": {
            "min": 435,
            "max": 458
        },
        "symbol": "HVAX",
        "name": "HVAX Technologies",
        "slug": "hvax-technologies",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-30T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/subam-papers-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/391354/subam-papers",
        "endDate": "2024-10-03T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Subam-300x300.jpg",
        "listingDate": "2024-10-08T03:30:00Z",
        "priceRange": {
            "min": 144,
            "max": 152
        },
        "symbol": "SUBAM",
        "name": "Subam Papers",
        "slug": "subam-papers",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-30T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/neopolitan-pizza-and-foods-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/391507/neopolitan-pizza-and-foods",
        "endDate": "2024-10-04T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/NeoPolitan-300x300.jpg",
        "listingDate": "2024-10-09T03:30:00Z",
        "priceRange": {
            "min": 20,
            "max": 20
        },
        "symbol": "NPFL",
        "name": "Neopolitan Pizza and Foods",
        "slug": "neopolitan-pizza-and-foods",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-30T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/paramount-dye-tec-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/391498/paramount-dye-tec",
        "endDate": "2024-10-03T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Paramount-Dye-Tec-IPO-GMP-1-300x300.webp",
        "listingDate": "2024-10-08T03:30:00Z",
        "priceRange": {
            "min": 111,
            "max": 117
        },
        "symbol": "PARAMOUNT",
        "name": "Paramount Dye Tec",
        "slug": "paramount-dye-tec",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "https://ipowatch.in/hyundai-motor-india-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/381489/hyundai-motor-india",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/06/hyundai-ipo-300x300.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "HYUNDAI",
        "name": "Hyundai Motor India",
        "slug": "hyundai-motor-india",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/389561/swiggy",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Swiggy-ipo-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "SWIGGY",
        "name": "Swiggy",
        "slug": "swiggy",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/391072/zepto",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Zepto-IPO-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "ZEPTO",
        "name": "Zepto",
        "slug": "zepto",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/390466/ntpc-green-energy",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/NTPC-Green-ipo-300x300.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "NTPCGREEN",
        "name": "NTPC Green Energy",
        "slug": "ntpc-green-energy",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/390401/ather-energy",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/ather-ipo-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "ATHER",
        "name": "Ather Energy",
        "slug": "ather-energy",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/390366/boat",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/boAt-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "BOAT",
        "name": "BOAT",
        "slug": "boat",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/390787/waaree-energies",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Waaree-300x300.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "WAAREEENERGY",
        "name": "Waaree Energies",
        "slug": "waaree-energies",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/383541/blackbuck",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/06/Blackbuck-ipo-2-300x300.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "BLACKBUCK",
        "name": "Blackbuck",
        "slug": "blackbuck",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/391204/paras-healthcare",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/paras-healthcare-ipo-1-300x300.jpeg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "PARASHCL",
        "name": "Paras Healthcare",
        "slug": "paras-healthcare",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "https://ipowatch.in/avax-apparels-and-ornaments-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390321/avax-apparels-and-ornaments",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Avax_Logo-1-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "AVAX",
        "name": "Avax Apparels And Ornaments",
        "slug": "avax-apparels-and-ornaments",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/391199/rubicon-research",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/asasasrubi-1-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "RUBICON",
        "name": "Rubicon Research",
        "slug": "rubicon-research",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/391389/stallion-india-fluorochemicals",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Stallion-300x77.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "STALLION",
        "name": "Stallion India Fluorochemicals",
        "slug": "stallion-india-fluorochemicals",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/391191/niva-bupa-health-insurance-company",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/niva-bupa-ipo-1-300x300.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "NBHIC",
        "name": "Niva Bupa Health Insurance Company",
        "slug": "niva-bupa-health-insurance-company",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/391188/fabindia",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/fab-india-ipo-300x300.jpeg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "FABINDIA",
        "name": "FabIndia",
        "slug": "fabindia",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "https://ipowatch.in/afcons-infrastructure-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390411/afcons-infrastructure",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Afcons-infra-ipo-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "AFCONS",
        "name": "Afcons Infrastructure",
        "slug": "afcons-infrastructure",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/390195/hero-fincorp",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/hero-fincorp-ipo-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "HEROFINCORP",
        "name": "Hero Fincorp",
        "slug": "hero-fincorp",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/390473/lg-electronics",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/LG-ipo-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "LGELEC",
        "name": "LG electronics",
        "slug": "lg-electronics",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/390197/acme-solar-holdings",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Acme-solar-holdings-ipo-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "ASHL",
        "name": "ACME Solar Holdings",
        "slug": "acme-solar-holdings",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/389545/bmw-ventures",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/BMW-ventures-ipo-300x300.jpeg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "BMW",
        "name": "BMW Ventures",
        "slug": "bmw-ventures",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/391242/quadrant-future-tek",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Quadrant-Future-Tek-300x300.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "QUADRANT",
        "name": "Quadrant Future Tek",
        "slug": "quadrant-future-tek",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/300483/mobikwik",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/mobikwik-ltd-300x300.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "MOBIKWIK",
        "name": "MobiKwik",
        "slug": "mobikwik",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/333546/godavari-biorefineries",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/godavari-ltd-300x300.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "GBL",
        "name": "Godavari Biorefineries",
        "slug": "godavari-biorefineries",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/334880/keventers-agro-limited",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/keventers-Ltd-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "KEVENTERS",
        "name": "Keventers Agro",
        "slug": "keventers-agro",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/334879/vlcc-health-care-limited",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/VLCC-ltd-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "VLCC",
        "name": "VLCC Health Care",
        "slug": "vlcc-health-care",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/307026/oyo-oravel-stays-limited",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/oyo-300x300.jpeg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "OYO",
        "name": "OYO",
        "slug": "oyo",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/355868/national-securities-depository-limited-nsdl",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/nsdl-ltd-300x300.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "NSDL",
        "name": "National Securities Depository Limited",
        "slug": "national-securities-depository-limited",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/331806/navi-technologies-limited",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/navi-technologies-ltd-300x150.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "NAVITECH",
        "name": "Navi Technologies",
        "slug": "navi-technologies",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/355218/deltatech-gaming-limited",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/deltatech-gaming-adda-52-300x300.jpg",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "DELTAGAMING",
        "name": "Deltatech Gaming (Adda 52)",
        "slug": "deltatech-gaming-(adda-52)",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/307522/lava-international",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/lava-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "LAVA",
        "name": "Lava International",
        "slug": "lava-international",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/329342/snapdeal-limited",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/snapdeal-300x167.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "SNAPDEAL",
        "name": "Snapdeal",
        "slug": "snapdeal",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/335317/gold-plus-glass-industry-limited",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/goldplus-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "GPGIL",
        "name": "Gold Plus Glass Industry",
        "slug": "gold-plus-glass-industry",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "0001-01-01T00:00:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/308388/wellness-forever-medicare-limited",
        "endDate": "0001-01-01T00:00:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/05/wellness-300x300.png",
        "listingDate": "0001-01-01T00:00:00Z",
        "priceRange": {
            "min": 0,
            "max": 0
        },
        "symbol": "WELLNESS",
        "name": "Wellness Forever Medicare",
        "slug": "wellness-forever-medicare",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-25T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/krn-heat-exchanger-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390277/krn-heat-exchanger-and-refrigeration",
        "endDate": "2024-09-27T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/krn-heat-exchanger-and-refrigeration-ipo-300x300.webp",
        "listingDate": "2024-10-03T03:30:00Z",
        "priceRange": {
            "min": 209,
            "max": 220
        },
        "symbol": "KRN",
        "name": "KRN Heat Exchanger and Refrigeration",
        "slug": "krn-heat-exchanger-and-refrigeration",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-25T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/techera-engineering-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390576/techera-engineering",
        "endDate": "2024-09-27T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/tech-era-ipo-300x300.png",
        "listingDate": "2024-10-03T03:30:00Z",
        "priceRange": {
            "min": 75,
            "max": 82
        },
        "symbol": "TECHERA",
        "name": "TechEra Engineering",
        "slug": "techera-engineering",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-25T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/thinking-hats-entertainment-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390583/thinking-hats-entertainment-solutions",
        "endDate": "2024-09-27T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/thinking-hats-300x300.jpg",
        "listingDate": "2024-10-03T03:30:00Z",
        "priceRange": {
            "min": 42,
            "max": 44
        },
        "symbol": "THESL",
        "name": "Thinking Hats Entertainment Solutions",
        "slug": "thinking-hats-entertainment-solutions",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-25T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/unilex-colours-and-chemicals-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390858/unilex-colours-and-chemicals",
        "endDate": "2024-09-27T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Unilex-ipo-300x300.png",
        "listingDate": "2024-10-03T03:30:00Z",
        "priceRange": {
            "min": 82,
            "max": 87
        },
        "symbol": "UNILEX",
        "name": "Unilex Colours and Chemicals",
        "slug": "unilex-colours-and-chemicals",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-23T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/manba-finance-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390566/manba-finance",
        "endDate": "2024-09-25T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/manba-ipo-300x300.png",
        "listingDate": "2024-09-30T03:30:00Z",
        "priceRange": {
            "min": 114,
            "max": 120
        },
        "symbol": "MANBA",
        "name": "Manba Finance",
        "slug": "manba-finance",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-23T04:30:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/390207/wol3d-india",
        "endDate": "2024-09-25T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/wol3d-india-logo-IPO-300x300.jpeg",
        "listingDate": "2024-09-30T03:30:00Z",
        "priceRange": {
            "min": 142,
            "max": 150
        },
        "symbol": "SME",
        "name": "WOL3D India",
        "slug": "wol3d-india",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-23T04:30:00Z",
        "gmpUrl": "https://ipowatch.in/rappid-valves-india-ipo-gmp-grey-market-premium/",
        "link": "https://zerodha.com//ipo/390599/rappid-valves",
        "endDate": "2024-09-25T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/rapid-valves-ipo-300x300.png",
        "listingDate": "2024-09-30T03:30:00Z",
        "priceRange": {
            "min": 210,
            "max": 222
        },
        "symbol": "RAPPID",
        "name": "Rappid Valves",
        "slug": "rappid-valves",
        "details": null,
        "gmpTimeline": null
    },
    {
        "startDate": "2024-09-20T04:30:00Z",
        "gmpUrl": "",
        "link": "https://zerodha.com//ipo/390005/bikewo-greentech",
        "endDate": "2024-09-24T11:30:00Z",
        "logoUrl": "https://zerodha.com/z-connect/wp-content/uploads/2024/09/Bikewo-ipo-300x300.jpeg",
        "listingDate": "2024-09-27T03:30:00Z",
        "priceRange": {
            "min": 59,
            "max": 62
        },
        "symbol": "BIKEWO",
        "name": "BikeWo GreenTech",
        "slug": "bikewo-greentech",
        "details": null,
        "gmpTimeline": null
    }
]
    
*/
