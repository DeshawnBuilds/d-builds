// ATLAS Ledger — the public, read-only copy.
// Rules: a call is never edited after it is logged. New information goes in
// `record` as a dated entry. Nothing is marked scored until a check happens.

export type AtlasVerdict = "Confirmed" | "Partly confirmed" | "Wrong" | "Too early";

export type AtlasEntry = {
  date: string; // YYYY-MM-DD
  text: string;
  verdict?: AtlasVerdict; // present only when the entry scores the call
};

export type AtlasCall = {
  num: number;
  title: string;
  mechanism: string;
  evidence: string[];
  wrongIf: string[];
  confidence: "Low" | "Medium" | "Medium-high" | "High";
  horizon: string;
  watching: string;
  logged: string; // YYYY-MM-DD
  nextCheck: string; // YYYY-MM-DD
  checkNote: string;
  record: AtlasEntry[];
};

export const atlasMeta = {
  logged: "2026-11-20",
  researchAsOf: "2026-11-15",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};

export const statusOf = (call: AtlasCall): AtlasVerdict | "Open" => {
  const scored = call.record.filter((e) => e.verdict);
  return scored.length ? scored[scored.length - 1].verdict! : "Open";
};

export const atlasCalls: AtlasCall[] = [
  {
    num: 1,
    title: "Power generation equipment stays sold out through 2028",
    mechanism:
      "Orders for gas turbines are growing faster than the three makers can add factory capacity, so buyers queue for years and the makers hold pricing power.",
    evidence: [
      "GE Vernova gas backlog plus slot reservations rose from 116 GW to 122 GW in Q3 2026, and it expects at least 130 GW by year-end (8-K, Oct 28, 2026).",
      "GE Vernova output is 20 GW a year now, planned at 24 GW in 2028 and 30 GW in 2030.",
      "GE Vernova Q3 orders were $29.3B, up 96% organically.",
    ],
    wrongIf: [
      "GE Vernova's gas backlog shrinks two quarters in a row.",
      "Slot reservations stop converting into firm orders.",
      "Turbine lead times fall below three years.",
    ],
    confidence: "High",
    horizon: "2026 to 2028",
    watching: "GE Vernova, Siemens Energy, Mitsubishi Heavy",
    logged: "2026-11-20",
    nextCheck: "2027-01-31",
    checkNote: "GE Vernova Q4 2026 results: did the gas backlog reach 130 GW?",
    record: [],
  },
  {
    num: 2,
    title: "Memory is the tightest compute input through 2027",
    mechanism:
      "High-bandwidth memory (HBM) for AI chips uses far more wafer per bit than ordinary DRAM, so every HBM order takes supply away from the rest of the memory market.",
    evidence: [
      "SK hynix said on Oct 28, 2026 that its DRAM and HBM volume through 2029 is effectively sold out, counting deals still being negotiated.",
      "Micron's latest quarter: revenue $54.23B, up 379%, with 87.0% gross margin.",
      "Samsung says its 2027 HBM is sold out (Oct 29, 2026).",
      "Microsoft said about $25B of its capex is from higher component prices (Apr 29, 2026).",
    ],
    wrongIf: [
      "DRAM contract prices fall two quarters in a row.",
      "HBM long-term agreements get renegotiated downward.",
    ],
    confidence: "High",
    horizon: "Through 2027, with oversupply risk in 2028",
    watching: "SK hynix, Micron, Samsung",
    logged: "2026-11-20",
    nextCheck: "2026-12-31",
    checkNote: "Micron's next quarterly results (guided to about $61.5B) and DRAM contract price direction.",
    record: [],
  },
  {
    num: 3,
    title: "Permission to build becomes a priced input",
    mechanism:
      "Local opposition, water rules and ratepayer politics block or delay sites, so land that already has power, water and community approval commands a premium.",
    evidence: [
      "Data Center Watch counted at least 75 projects worth about $130B disrupted by local opposition in Q1 2026.",
      "Wells Fargo counted 374 local moratoriums (Sept 2026).",
      "Texas ordered an audit of every data-center grid request after requests reached 474 GW (Sept 15, 2026).",
      "Counter-evidence on file: SemiAnalysis found only 1,525 MW actually delayed out of about 20 GW inside restricted areas, so headlines overstate real slippage.",
    ],
    wrongIf: [
      "Federal rules override local moratoriums.",
      "The moratorium count falls.",
      "Announced projects keep arriving on schedule despite the opposition.",
    ],
    confidence: "Medium-high",
    horizon: "2026 to 2028",
    watching: "Owners of entitled, powered land; established operators such as Equinix",
    logged: "2026-11-20",
    nextCheck: "2027-03-31",
    checkNote: "Updated moratorium trackers, and how much capacity was actually delayed versus announced as blocked.",
    record: [],
  },
  {
    num: 4,
    title: "On-site power becomes the default for gigawatt AI sites",
    mechanism:
      "Each quarter of delay on a large site costs far more than a higher power price, and grid regulators are pushing big loads to bring their own generation.",
    evidence: [
      "Bloom Energy Q3 2026 revenue was $1.24B, up 138%, with full-year guidance raised to $4.4B to $4.6B.",
      "Oracle agreed to up to 2.8 GW of Bloom fuel cells (Apr 13, 2026).",
      "PJM stakeholders endorsed a backstop procurement that large loads would pay for, filed with FERC July 31, 2026.",
      "PJM's market monitor recommends a faster path for data centers that bring their own new generation.",
    ],
    wrongIf: [
      "FERC or states restrict generation built next to data centers.",
      "Grid queue reform cuts connection times below two years.",
    ],
    confidence: "Medium",
    horizon: "2026 to 2028",
    watching: "Bloom Energy, turbine makers, gas pipeline operators",
    logged: "2026-11-20",
    nextCheck: "2027-03-31",
    checkNote: "FERC's decision on PJM's backstop filing (Docket ER26-3380) and new on-site power deals.",
    record: [],
  },
  {
    num: 5,
    title: "High-voltage grid parts are the overlooked chokepoint",
    mechanism:
      "Transformers, switchgear and bushings take years to qualify with utilities and years to deliver. Every new power plant and data center needs them, and few people follow them.",
    evidence: [
      "GE Vernova agreed to buy Trench Group for $9.0B on Oct 28, 2026, about 13 times projected 2028 earnings.",
      "GE Vernova's electrification equipment backlog was $42.2B, up 60% year over year.",
      "Power transformers averaged about 128 weeks of lead time in a mid-2025 survey (Wood Mackenzie).",
    ],
    wrongIf: [
      "Transformer lead times fall below one year.",
      "Grid equipment backlogs stop growing.",
    ],
    confidence: "Medium",
    horizon: "2027 to 2029",
    watching: "GE Vernova, Siemens Energy, Hitachi Energy, Eaton (not fully researched)",
    logged: "2026-11-20",
    nextCheck: "2027-04-30",
    checkNote: "Fresh transformer lead-time data (the figure on file is from mid-2025) and grid equipment backlogs.",
    record: [],
  },
  {
    num: 6,
    title: "Money is the hidden bottleneck for the neoclouds",
    mechanism:
      "GPU clouds that borrow heavily to build face rising interest costs on assets that age in a few years. Builders funded by customer prepayments or cheap capital are safer.",
    evidence: [
      "CoreWeave Q3 2026: revenue $3.661B and a $132.5B backlog, but an $846M net interest expense and a $709M net loss.",
      "Some CoreWeave bonds yielded above 16% (CNBC, Nov 10, 2026).",
      "Nebius said customer prepayments covered more than 100% of the capex tied to its Q3 agreements.",
    ],
    wrongIf: [
      "Borrowing costs for these companies fall back below 10%.",
      "GPU rental prices keep rising.",
    ],
    confidence: "Medium",
    horizon: "2027 to 2028",
    watching: "CoreWeave, Nebius, GPU-backed lenders",
    logged: "2026-11-20",
    nextCheck: "2027-02-28",
    checkNote: "CoreWeave Q4 2026 results: interest cost, prepayments received and new debt pricing.",
    record: [],
  },
  {
    num: 7,
    title: "Payments and trust layers get captured by incumbents",
    mechanism:
      "New chokepoints do not form at the top of the stack. Licensed stablecoin issuers, card networks and chip makers bundle settlement and verification into what they already control.",
    evidence: [
      "The GENIUS Act takes effect by Jan 18, 2027 and makes a federal license the gate for serving US users.",
      "Visa launched an agent registry (June 10, 2026); Mastercard completed its $1.8B BVNK purchase (Aug 2026).",
      "NVIDIA built confidential computing into its Vera Rubin rack platform.",
      "Agent payments are tiny: about 5.1M x402 transactions worth roughly $274,000 in Oct 2026.",
    ],
    wrongIf: [
      "A new entrant takes more than 25% share in regulated stablecoin payments, agent payments or attestation.",
      "An independent trust-layer company reports more than $100M in yearly recurring revenue.",
    ],
    confidence: "Medium-high",
    horizon: "2027 to 2029",
    watching: "Visa, Mastercard, Circle, NVIDIA",
    logged: "2026-11-20",
    nextCheck: "2027-06-30",
    checkNote: "Whether Visa or Mastercard publish agent-payment volumes, and Tether's US status under GENIUS.",
    record: [],
  },
  {
    num: 8,
    title: "Cooling profits shift from hardware to fluids and service",
    mechanism:
      "As cooling hardware standardizes, the recurring parts (coolant chemistry, monitoring, spares, maintenance) keep margin longer than the boxes do.",
    evidence: [
      "Ecolab closed its CoolIT purchase on July 2, 2026 for $4.627B net cash, pairing liquid cooling with its water and chemistry business.",
      "Ecolab reported CoolIT year-to-date sales up more than 100%.",
      "Vertiv's services business grew 41.5%.",
      "My own evidence check on liquid cooling found adoption is real but pricing power for hardware suppliers is unproven.",
    ],
    wrongIf: [
      "Service revenue grows slower than hardware revenue.",
      "Ecolab's high-tech business misses its growth path toward $4B by 2030.",
      "Cooling hardware margins hold up as competition grows.",
    ],
    confidence: "Medium",
    horizon: "2027 to 2029",
    watching: "Ecolab, Vertiv",
    logged: "2026-11-20",
    nextCheck: "2027-02-28",
    checkNote: "Ecolab and Vertiv Q4 2026 results: service growth versus hardware growth.",
    record: [],
  },
  {
    num: 9,
    title: "Big-four hyperscaler capex grows at least 20% in 2027",
    mechanism:
      "Demand for AI capacity still exceeds what can be delivered, so the spending plans keep rising. This is the demand engine every other call depends on.",
    evidence: [
      "Amazon, Alphabet, Microsoft and Meta spent $201.9B in Q3 2026, up 108% year over year.",
      "2026 guidance totals roughly $720B to $740B.",
      "Alphabet's CFO said 2027 capex will increase significantly.",
      "Sell-side consensus for 2027 is about $934.5B, up 28% (an estimate).",
    ],
    wrongIf: [
      "Two or more of the four guide 2027 capex flat on their January and February 2027 calls.",
    ],
    confidence: "High",
    horizon: "2027",
    watching: "Amazon, Alphabet, Microsoft, Meta",
    logged: "2026-11-20",
    nextCheck: "2027-02-15",
    checkNote: "2027 capex guidance on the four Q4 2026 earnings calls.",
    record: [],
  },
];
