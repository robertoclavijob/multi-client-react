import configuration from './configuration';

const { currentClient } = configuration;

const messages = require(`./clients/${currentClient}/messages`).default;

export default messages;
