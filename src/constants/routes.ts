const Home = {
  Home: `/`,
  About: `/#about`,
  Features: `/#features`,
  Clients: `/#clients`,
};

const CaseStudies = {
  Home: `/`,
  About: `/#about`,
  Service: `/#service`,
  'Contact us': `/#contact`,
};

const Social = {
  Dribble: `/`,
  Behance: `/`,
  Instagram: `/`,
  Twitter: `/`,
};

const Legal = {
  Privacy: `/privacy`,
  'Terms of usage': `/terms`,
};

export default {
  Home,
  'Case Studies': CaseStudies,
  Social,
  Legal,
} as Record<string, Record<string, string>>;
