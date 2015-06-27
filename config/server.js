var config = {
  mongodb: {
    host: '127.0.0.1',
    port: '27017',
    name: 'devebot_example_test',
    }
  },
  redis: {
    host: '127.0.0.1',
    name: 'devebot_example_test',
  },
  elasticsearch: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '9200',
    name: 'devebot_example_test',
  }
};

module.exports = config;
