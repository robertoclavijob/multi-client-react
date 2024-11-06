import configuration from './configuration';

const { currentClient, clients } = configuration;
const clientConfig = clients[currentClient];

const messages = {
  app: {
    welcome: `Welcome to ${clientConfig.clientName}`,
  },
  promotion: {
    title: "Special Promotion",
    text: `Enjoy a delicious Big Mac today!`,
    apiKey: `API Key: ${clientConfig.apiKey}`
  },
  contact: {
    title: "Contact Us",
    text: `Call us at ${clientConfig.contactPhone} for support.`
  },
  special: {
    title: "Today's Special",
    text: "Get 2 for $5 on Chicken Nuggets!"
  }
};

export default messages;
