import { resolve } from "dns";
import { reject } from "../../../Library/Caches/typescript/2.6/node_modules/@types/bluebird";

const Botgram = require("botgram");
const config = require("./config");

if (!config.botToken) {
    console.error("No bot token specified. Please set BOT_TOKEN in env");
    process.exit(1);
}

const bot = new Botgram(config.botToken);

bot.command("price", require("./commands/price"));
bot.command("providers", require("./commands/providers"));
bot.command("eth", require("./commands/eth"));
bot.command("help", "start", require("./commands/help"));

// var foo = (path) => {
//     return (msg, reply) => {
//         var prom = new Promise((resolve, reject) => {
//             require(path);
//         });

//         prom.catch((err) => {
//             console.log(err);
//         });

//         return prom;
//     }
// }

// bot.command("price", foo("./commands/price"));
// bot.command("providers", foo("./commands/providers"));
// bot.command("eth", foo("./commands/eth"));
// bot.command("help", "start", foo("./commands/help"));
