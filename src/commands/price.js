const providers = require("../providers");

const handler = (msg, reply) => {
  const args = msg.args(2);
  let baseCurrency = args[0] || "ETH";
  let quoteCurrency = args[1] || "USD";
  if (!/^[a-zA-Z0-9]+$/.test(baseCurrency) || !/^[a-zA-Z0-9]+$/.test(quoteCurrency)) {
    reply.text("Invalid input currency").then((err, result) => {
      if (err)
        console.error("\nSending message failed!");
      else
        console.log("\nSent message:", result);
    });
    return;
  }

  baseCurrency = baseCurrency.toUpperCase();
  quoteCurrency = quoteCurrency.toUpperCase();
  let botReply = "";
  let prom = Promise.resolve();
  for (const exchange in providers) {
    if (!providers.hasOwnProperty(exchange)) {
      continue;
    }
    const p = providers[exchange];
    prom = prom.then(() => {
        return p(baseCurrency, quoteCurrency);
      })
      .then((price) => {
        botReply += `\n${exchange}: ${price.toFixed(6)}`;
      }).catch(() => {});
  }

  prom.then(() => {
    botReply = botReply || "\n<i>No data</i>";
    reply.html(`<b>${baseCurrency} - ${quoteCurrency}</b> ${botReply}`)
        .then((err, result) => {
      if (err)
        console.error("\nSending message failed!");
      else
        console.log("\nSent message:", result);
    });
  });
};

module.exports = handler;
