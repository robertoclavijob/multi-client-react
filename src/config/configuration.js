const configuration = {
    currentClient: "burgerking",
    clients: {
      mcdonalds: require('./clients/mcdonalds/configuration').default,
      burgerking: require('./clients/burgerking/configuration').default,
    },
  };
  
  export default configuration;
  