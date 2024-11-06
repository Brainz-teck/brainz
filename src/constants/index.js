import { send, shield, star, jira, fw, shopify, zoho } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },

  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "contact-form",
    title: "Contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "SaaS Integration",
    content:
      "We excel in integrating SaaS products seamlessly into your existing infrastructure, ensuring smooth data flow and interoperability across your systems.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Custom App Development",
    content:
      "Our team of experienced developers crafts bespoke applications tailored to your unique business needs. Whether it's enhancing user experience, optimizing workflows, or adding new features, we've got you covered.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Scalable Solutions",
    content:
      "We understand that businesses evolve, which is why our solutions are designed to scale alongside your growth. From startups to enterprises, we adapt to your changing requirements to keep you ahead of the curve.",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: jira,
  },
  {
    id: "client-2",
    logo: fw,
  },
  {
    id: "client-3",
    logo: shopify,
  },
  {
    id: "client-4",
    logo: zoho,
  },
  // {
  //   id: "client-5",
  //   logo: Freshworks,
  // },
];
