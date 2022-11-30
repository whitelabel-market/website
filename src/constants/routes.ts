const Home = {
  Home: `/`,
  About: `/#about`,
  Features: `/#features`,
  Clients: `/#clients`,
};

const Contact = {
  Contact: `mailto:hello@decentum.co`,
};

const Social = {
  Tw: `/`,
  Ig: `/`,
  Fb: `/`,
  Gi: `/`,
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
