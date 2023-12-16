import { NextResponse } from "next/server";
import { Telegraf } from "telegraf";
import {message} from "telegraf/filters"

async function FindSong(songName){
const res = await fetch("https://saavn.me/search/songs?query=kun+faya+kun&page=1&limit=2");
console.log(res.json());
}

const  GET = async() => {
    const bot = new Telegraf(process.env.BOT_TOKEN)
    var songName;

FindSong("abcd");
    
    bot.start((ctx) => ctx.reply('Welcome , write /help for help messages'))
    bot.help((ctx) => ctx.reply('  /start - to start the bot\n /help - help messages \n /play - for playing music \n /pause - pause music \n /stop - stop music   '))
    // bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
    bot.on(message, async (ctx) => {
        if (ctx.message.text.startsWith('/play')) {
            const songTitle = ctx.message.text.match(/play (.+)/)[1];
          ctx.reply(`${songTitle} playing`)
        }
      });

    bot.hears('/play ', (ctx) => ctx.reply('Function under development'))
    bot.hears('/pause', (ctx) => ctx.reply('Function under development'))
    bot.hears('/stop', (ctx) => ctx.reply('Function under development'))
    // bot.hears(`/play${songName}` , (ctx)=>{ctx.reply(` ${songName} song playing`)})
    bot.launch()
    
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
    return NextResponse.json({"message":"Ok"})
}
export {GET}