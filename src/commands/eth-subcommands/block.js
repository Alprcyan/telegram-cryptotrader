module.exports = (reply, web3, args) => {
  if (args.length < 1) {
    reply.text("Block hash or number is required").then((err, result) => {
      if (err)
        console.error("Sending message failed!");
      else
        console.log("Sent message:", result);
    });
    return;
  }
  web3.eth.getBlockAsync(args[0], false).then((block) => {
    if (!block) {
      reply.text("Block not found").then((err, result) => {
        if (err)
          console.error("Sending message failed!");
        else
          console.log("Sent message:", result);
      });
      return;
    }
    // const txHashes = block.transactions;
    delete block["transactions"];
    reply.html(`<pre>${JSON.stringify(block, null, 2)}</pre>`).then((err, result) => {
      if (err)
        console.error("Sending message failed!");
      else
        console.log("Sent message:", result);
    });
    // reply.html(`<pre>${JSON.stringify(txHashes, null, 2)}</pre>`);
  }).catch((err) => {
    reply.text("Error getting block: " + args[0]).then((err, result) => {
      if (err)
        console.error("Sending message failed!");
      else
        console.log("Sent message:", result);
    });
  });
};
