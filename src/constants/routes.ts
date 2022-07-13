const Home = {
  Home: `/`,
  About: `/#about`,
  Features: `/#features`,
  Clients: `/#clients`,
};

const Contact = {
  Contact: `/contact`,
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
  Contact: Contact,
  Social,
  Legal,
} as Record<string, Record<string, string>>;
