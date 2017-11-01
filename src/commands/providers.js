const providers = require("../providers");

const handler = (msg, reply) => {
  const allProviders = [];
  for (const exchange in providers) {
    if (!providers.hasOwnProperty(exchange)) {
      continue;
    }
    allProviders.push(exchange);
  }

  reply.html(`<b>Supported providers</b>\n${allProviders.join("\n")}`);
};

// module.exports = handler;
module.exports = (msg, reply) => {
    try {
        handler(msg, reply);
    }
    catch (err) {
        console.log("Error: " + err)
    }
}
