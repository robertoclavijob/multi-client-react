import configuration from './configuration';

const { currentClient } = configuration;

const firebaseConfig = require(`./clients/${currentClient}/firebaseConfig`).default;

export default firebaseConfig;