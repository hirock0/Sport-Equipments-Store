const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'assignment-10-lotus',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

