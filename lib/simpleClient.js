const createSimpleClient = ({ logAgent }) => ({
  logAgent,
  startLogging() {
    this.logAgent.log('PRODUCTS:Register', 'U190');
    this.logAgent.log('SALES:Register', 'U197');
  },
});

export { createSimpleClient };
