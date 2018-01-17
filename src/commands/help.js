const HELP_TEXT = "<b>Blockchain Info Bot - by libertylocked</b>\n" +
  "/price - see last trade prices on multiple exchanges. Usage: /price [BASE] [QUOTE]\n" +
  "/providers - see the list of supported exchanges\n" +
  "/eth - ethereum web3 functions (advanced users only). Geth node provided by INFURA\n" +
  "/help - see the list of commands\n" +
  "\n<b>GitHub</b>: <a>https://github.com/libertylocked/telegram-cryptotrader</a>";

const handler = (msg, reply) => {
    reply.html(HELP_TEXT).then((err, result) => {
        if (err)
            console.error("Sending message failed!");
        else
            console.log("Sent message:", result);
        })
};

module.exports = handler;
