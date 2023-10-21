const TelegramBot = require('node-telegram-bot-api');

const token = '5944659266:AAGsbe5hKLjFt5ghpPot7yUq4v60bUUDUGs';

const bot = new TelegramBot(token, {polling: true});

function markdownV2Escape(str) {
    return str.replace(/([_*\[\]()~>#+\-=|{}.!])/g, '\\\$1');
}

bot.onText(/\/start/, (msg) => {
    const messageToBeSent = '𝗛𝗼𝘄 𝗧𝗼 𝗨𝘀𝗲:\n• This bot is used specifically to 𝗲𝘀𝗰𝗮𝗽𝗲 𝗹𝗼𝗴𝘁𝗶𝗺𝗲 for AFK\n• Use 𝗶𝗻𝗹𝗶𝗻𝗲 to escape in chat\n  For example: `@iamafkbot I\’m sorry; this is not a good time. I will call you later`.\n• Click the popup of your input.\n• This will escape afk footprints and keep you afk still.\n• Do not share any private 𝗰𝗿𝗲𝗱𝗲𝗻𝘁𝗶𝗮𝗹𝘀 via the bot.\n• Happy offscreening 👋';

    const messageMarkdownV2 = markdownV2Escape(messageToBeSent);

    bot.sendMessage(msg.chat.id, messageMarkdownV2, {parse_mode: 'MarkdownV2'});
});

bot.on('inline_query', (msg) => {
    const query = msg.query;
    const results = [{
        type: 'article',
        id: '1',
        title: 'Send the message.',
        input_message_content: {
            message_text: '#afk \n' + query
        }
    }];

    bot.answerInlineQuery(msg.id, results, {cache_time: 0});
});
