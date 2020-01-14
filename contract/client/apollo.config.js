module.exports = {
  client: {
    includes: ['./src/**/*.ts'],
    service: {
      name: 'client',
      url: 'http://127.0.0.1:8000/',
      skipSSLValidation: true,
      mergeInFieldsFromFragmentSpreads: true,
    }
  }
};
