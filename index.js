const TelegramBot = require('node-telegram-bot-api');

const token = '6509530725:AAGqDvkgCQ_WYaOinZD6ZLaBQ14jmvKNE1s'; //Token de el bot
const bot = new TelegramBot(token, { polling: true });

bot.on('message', msg => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/start') {
    bot.sendMessage(chatId, 'Welcome to the bot!');
  }
});
  