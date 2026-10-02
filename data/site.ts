// Central content for D BUILDS V1.
// Everything here documents what is real. Anything not yet real is marked
// as in development rather than invented.

export type PillarKey = "myself" | "things" | "future";

export const site = {
  name: "D BUILDS",
  title: "D BUILDS — Deshawn Builds",
  description: "Building myself. Building things. Building my future.",
  location: "Las Vegas, NV",
  roles: ["Creator", "Builder", "Student"],
  headline: ["I'M BUILDING A LIFE", "I ONCE THOUGHT", "I WAS LATE FOR."],
  supporting:
    "I'm documenting what happens when you stop waiting to become the person you imagine—and start building him.",
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Myself", href: "/myself" },
  { label: "Things", href: "/things" },
  { label: "Future", href: "/future" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];

export const followNav: NavItem = { label: "Follow the Build", href: "/follow" };

export type Pillar = {
  key: PillarKey;
  number: string;
  title: string;
  short: string;
  tagline: string;
  description: string;
  href: string;
  themes: string[];
};

export const pillars: Pillar[] = [
  {
    key: "myself",
    number: "01",
    title: "Building Myself",
    short: "Myself",
    tagline: "The person.",
    description: "The internal work behind becoming who I'm trying to become.",
    href: "/myself",
    themes: [
      "Becoming",
      "Identity",
      "Discipline",
      "Creativity",
      "Personal philosophy",
      "Remember Your Future",
      "Feeling behind",
      "Survival → creation",
    ],
  },
  {
    key: "things",
    number: "02",
    title: "Building Things",
    short: "Things",
    tagline: "The creations.",
    description:
      "Films, worlds, software and experiments that didn't exist until I decided to make them.",
    href: "/things",
    themes: [
      "Awakened Creators",
      "AI filmmaking",
      "Impossible worlds",
      "Software",
      "Mirror",
      "Creative workflows",
      "Prototypes",
      "Failures & breakthroughs",
    ],
  },
  {
    key: "future",
    number: "03",
    title: "Building My Future",
    short: "Future",
    tagline: "The direction.",
    description:
      "Learning the skills and building the career that takes me where I'm going.",
    href: "/future",
    themes: [
      "Learning technology",
      "A+",
      "Networking",
      "Cloud",
      "Engineering",
      "Sales",
      "Business-building",
      "Learning from zero",
    ],
  },
];

export const pillarByKey = (key: PillarKey) =>
  pillars.find((p) => p.key === key)!;

export type Art = "clock" | "portal" | "network";

export type LatestBuild = {
  pillar: PillarKey;
  title: string;
  description: string;
  href: string;
  art: Art;
  status: string;
};

export const latestBuilds: LatestBuild[] = [
  {
    pillar: "myself",
    title: "The 48HR Shot Clock",
    description:
      "There are things I want to create before I die. The clock is already moving.",
    href: "/writing/the-48hr-shot-clock",
    art: "clock",
    status: "Essay in development",
  },
  {
    pillar: "things",
    title: "Awakened Creators",
    description:
      "Building impossible worlds as a language for remembering what we can become.",
    href: "/things/awakened-creators",
    art: "portal",
    status: "Active universe",
  },
  {
    pillar: "future",
    title: "Learning Networking From Zero",
    description: "Documenting the climb from fundamentals toward engineering.",
    href: "/future",
    art: "network",
    status: "Field notes in progress",
  },
];

export type Project = {
  title: string;
  category: string;
  status: "Active" | "Building" | "Developing";
  description: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Awakened Creators",
    category: "Cinematic Universe",
    status: "Active",
    description:
      "An evolving cinematic universe about remembering the future you're capable of creating.",
    href: "/things/awakened-creators",
  },
  {
    title: "Mirror",
    category: "Software",
    status: "Building",
    description: "Software in progress. Details will be documented as it's built.",
  },
  {
    title: "AI Cinema Lab",
    category: "Experiments",
    status: "Active",
    description:
      "Cinematic experiments, motion tests and workflows—documented, including what fails.",
  },
  {
    title: "Remember Your Future",
    category: "Framework",
    status: "Developing",
    description: "A personal framework still being written. It will be shared as it takes shape.",
  },
];

export const learningPath = ["Tech+", "A+", "Networking", "Engineering"];

export type Article = {
  slug: string;
  pillar: PillarKey;
  title: string;
  excerpt: string;
  featured?: boolean;
};

// Article pages render from this list. Bodies are added when essays exist.
export const articles: Article[] = [
  {
    slug: "the-48hr-shot-clock",
    pillar: "myself",
    title: "The 48HR Shot Clock",
    excerpt:
      "There are things I want to create before I die. The clock is already moving.",
    featured: true,
  },
  {
    slug: "awakened-creators-field-notes",
    pillar: "things",
    title: "Awakened Creators: Field Notes",
    excerpt:
      "Building impossible worlds as a language for remembering what we can become.",
  },
  {
    slug: "learning-networking-from-zero",
    pillar: "future",
    title: "Learning Networking From Zero",
    excerpt: "Documenting the climb from fundamentals toward engineering.",
  },
];

// Social channels are added here once real URLs exist. Never invent them.
export const socialLinks: NavItem[] = [];

export const acuSections = [
  {
    title: "Latest Films",
    note: "Films from the universe will screen here.",
  },
  {
    title: "Worlds",
    note: "The places of the universe, mapped as they're built.",
  },
  {
    title: "Characters",
    note: "Who lives in these worlds, and what they're remembering.",
  },
  {
    title: "Fragments / Lore",
    note: "Pieces of the mythology, released as they're written.",
  },
  {
    title: "Behind the Creation",
    note: "Process, prompts, failures and the decisions behind each frame.",
  },
];
