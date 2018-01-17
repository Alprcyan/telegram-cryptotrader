module.exports = (reply, web3, args) => {
  web3.version.getNode((err, nodeVer) => {
    if (err) {
      reply.text("Error getting node version or API version").then((err, result) => {
        if (err)
          console.error("Sending message failed!");
        else
          console.log("Sent message:", result);
      });
      return;
    }
    reply.text(nodeVer + "\nweb3 API: " + web3.version.api).then((err, result) => {
      if (err)
        console.error("Sending message failed!");
      else
        console.log("Sent message:", result);
    });
  });
};
