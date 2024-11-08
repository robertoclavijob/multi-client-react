import environmentConfig from './environmentConfig';

const { currentClient } = environmentConfig;
console.log(`./clients/${currentClient}/styles.css`)

const styles = require(`./clients/${currentClient}/styles.css`);

export default styles;
