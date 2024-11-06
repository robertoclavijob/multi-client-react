import configuration from './configuration';

const clientConfig = configuration;

export default {
  app: {
    welcome: `Welcome to ${clientConfig.clientName}`,
  },
  promotion: {
    title: "Special Promotion",
    text: "Get a Whopper for $5!",
    apiKey: `API Key: ${clientConfig.apiKey}`,
  },
  contact: {
    title: "Contact Us",
    text: `Call us at ${clientConfig.contactPhone} for support.`,
  },
  special: {
    title: "Today's Special",
    text: "2 for $6 Chicken Fries!",
  },
};
