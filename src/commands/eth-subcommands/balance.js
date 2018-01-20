module.exports = (reply, web3, args) => {
  if (args.length < 1) {
    reply.text("Address argument required").then((err, result) => {
      if (err)
        console.error("\nSending message failed!");
      else
        console.log("\nSent message:", result);
    });
    return;
  }
  if (!web3.isAddress(args[0])) {
    reply.text("Not an address").then((err, result) => {
      if (err)
        console.error("\nSending message failed!");
      else
        console.log("\nSent message:", result);
    });
    return;
  }
  web3.eth.getBalanceAsync(args[0])
    .then((bal) => {
      reply.text(`${args[0]}\nBalance: ${web3.fromWei(bal).toString()} ETH`).then((err, result) => {
        if (err)
          console.error("\nSending message failed!");
        else
          console.log("\nSent message:", result);
      });
    })
    .catch((err) => {
      reply.text("Error getting balance of account").then((err, result) => {
        if (err)
          console.error("\nSending message failed!");
        else
          console.log("\nSent message:", result);
      });
    });
};
