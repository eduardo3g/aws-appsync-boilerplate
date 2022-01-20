const { handler } = require('../../functions/handler');

const we_invoke_something = async () => {
  const context = {};

  const event = {
    version: '1',
  };

  await handler(event, context);
};

module.exports = {
  we_invoke_something,
};
