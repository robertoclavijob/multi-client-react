import configuration from './configuration';

const { currentClient } = configuration;
console.log(`./clients/${currentClient}/styles.css`)

const styles = require(`./clients/${currentClient}/styles.css`);

export default styles;
