module.exports = (reply, web3, args) => {
  web3.eth.getBlockNumberAsync()
    .then((bNumber) => {
      reply.text(bNumber).then((err, result) => {
        if (err)
          console.error("\nSending message failed!");
        else
          console.log("\nSent message:", result);
      });
    })
    .catch((err) => {
      reply.text("Error getting block number").then((err, result) => {
        if (err)
          console.error("\nSending message failed!");
        else
          console.log("\nSent message:", result);
      });
    });
};
