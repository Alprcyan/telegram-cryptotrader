module.exports = (reply, web3, args) => {
  if (args.length < 1 || web3.isAddress(args[0])) {
    reply.text("Transaction hash is required").then((err, result) => {
      if (err)
        console.error("\nSending message failed!");
      else
        console.log("\nSent message:", result);
    });
    return;
  }
  web3.eth.getTransactionAsync(args[0]).then((tx) => {
    if (!tx) {
      reply.text("Tx not found").then((err, result) => {
        if (err)
          console.error("\nSending message failed!");
        else
          console.log("\nSent message:", result);
      });
      return;
    }
    reply.html(`<pre>${JSON.stringify(tx, null, 2)}</pre>`).then((err, result) => {
      if (err)
        console.error("\nSending message failed!");
      else
        console.log("\nSent message:", result);
    });
  }).catch((err) => {
    reply.text("Error getting tx: " + args[0]).then((err, result) => {
      if (err)
        console.error("\nSending message failed!");
      else
        console.log("\nSent message:", result);
    });
  });
};
