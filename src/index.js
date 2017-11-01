const Botgram = require("botgram");
const config = require("./config");

if (!config.botToken) {
    console.error("No bot token specified. Please set BOT_TOKEN in env");
    process.exit(1);
}

const bot = new Botgram(config.botToken);

const foo = (handler) => {
    return functions (msg, reply) {
        try {
            handler(msg, reply);
        }
        catch (err) {
            console.log('Error: ', err);
        }
    }
}

bot.command("price", foo(require("./commands/price")));
bot.command("providers", foo(require("./commands/providers")));
bot.command("eth", foo(require("./commands/eth")));
bot.command("help", "start", foo(require("./commands/help")));
