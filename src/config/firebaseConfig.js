import environmentConfig from './environmentConfig';

const { currentClient } = environmentConfig;

const firebaseConfig = require(`./clients/${currentClient}/firebaseConfig`).default;

export default firebaseConfig;