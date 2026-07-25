/**
 * Products Abhishek has shipped. Names, descriptions, employers and tech are
 * taken verbatim from the experience section of the landing page — nothing
 * here is invented.
 *
 * `url` is the outbound showcase link. VERIFY THESE BEFORE PUBLISHING — they
 * point at the official product pages, not at deep links, and product URLs
 * move. Leave `url` empty for anything with no public page: the card then
 * renders as a non-clickable entry with `note` shown instead of a link, which
 * is the honest treatment for internal enterprise products.
 */
export const PROJECTS = [
  {
    slug: 'cloudvision-agni',
    name: 'CloudVision AGNI',
    org: 'Arista Networks',
    period: 'May 2023 — Present',
    blurb:
      'A cloud-native, microservices-based platform that applies Machine Learning and AI to network identity and access.',
    tech: ['React', 'Angular', 'Microservices', 'ML/AI'],
    url: 'https://www.arista.com/en/products/cloudvision',
    note: '',
    accent: 'blue',
  },
  {
    slug: 'aruba-wireless',
    name: 'Enterprise Wireless Networking UI',
    org: 'Aruba, a Hewlett Packard Enterprise company',
    period: 'Nov 2017 — May 2023 · 5 yrs 7 mos',
    blurb:
      'UI for enterprise-grade wireless networking products serving global customers — security, scalability and reliability at HPE scale.',
    tech: ['React', 'Angular', 'TypeScript', 'Enterprise UI'],
    url: 'https://www.arubanetworks.com/',
    note: '',
    accent: 'green',
  },
  {
    slug: 'hirealchemy',
    name: 'HireAlchemy',
    org: 'EdGE Networks Pvt. Ltd.',
    period: 'Jun 2015 — Oct 2017',
    blurb:
      'An AI-driven HR-tech platform using artificial intelligence and data analysis to help organizations identify and hire the best talent.',
    tech: ['JavaScript', 'Data-driven UI', 'OOP'],
    url: '',
    note: 'Enterprise product — no public demo',
    accent: 'amber',
  },
  {
    slug: 'papertrell',
    name: 'Papertrell',
    org: 'Trellisys.net',
    period: 'Feb 2013 — Jun 2015',
    blurb:
      'A digital book-creation platform, built across core Java, Android, C# and JavaScript.',
    tech: ['Java', 'Android', 'C#', 'JavaScript'],
    url: '',
    note: 'Enterprise product — no public demo',
    accent: 'blue',
  },
]
