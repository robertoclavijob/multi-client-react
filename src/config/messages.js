import configuration from './configuration';

const messages = {
  app: {
    welcome: `Welcome to ${configuration.clientName}`,
  },
  promotion: {
    title: "Special Promotion",
    text: `Enjoy a delicious Big Mac today!`,
    apiKey: `API Key: ${configuration.apiKey}`
  },
  contact: {
    title: "Contact Us",
    text: `Call us at ${configuration.contactPhone} for support.`
  },
  special: {
    title: "Today's Special",
    text: "Get 2 for $5 on Chicken Nuggets!"
  }
};

export default messages;
