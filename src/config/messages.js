import environmentConfig from './environmentConfig';

const { currentClient } = environmentConfig;

const messages = require(`./clients/${currentClient}/messages`).default;

export default messages;
