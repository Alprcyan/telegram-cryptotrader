const providers = require("../providers");

const handler = (msg, reply) => {
  const allProviders = [];
  for (const exchange in providers) {
    if (!providers.hasOwnProperty(exchange)) {
      continue;
    }
    allProviders.push(exchange);
  }

  reply.html(`<b>Supported providers</b>\n${allProviders.join("\n")}`).then((err, result) => {
    if (err)
      console.error("\nSending message failed!");
    else
      console.log("\nSent message:", result);
  });
};

module.exports = handler;
