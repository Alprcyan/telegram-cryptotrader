const Botgram = require("botgram");
const config = require("./config");

if (!config.botToken) {
  console.error("No bot token specified. Please set BOT_TOKEN in env");
  process.exit(1);
}

const bot = new Botgram(config.botToken);

const funcPrice = require("./commands/price");
const funcProviders = require("./commands/providers");
const funcEth = require("./commands/eth");
const funcHelp = require("./commands/help");

const foo = (func) => {
  return (msg, reply) => {
    let prom = new Promise((resolve, reject) => {
        func(msg, reply);
    });
    prom.catch((error) => {
      console.log("Error: " + error);
    });
    return prom;
  }
}

bot.command("price", foo(funcPrice));
bot.command("providers", foo(funcProviders));
bot.command("eth", foo(funcEth));
bot.command("help", "start", foo(funcHelp));
