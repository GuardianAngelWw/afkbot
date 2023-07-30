# afk-bot

# Telegram Bot for AFK

This repository contains the code for a Telegram bot that helps users to escape logtime for AFK (Away From Keyboard).

## Prerequisites

You need to have Node.js and npm installed on your machine. If not, you can download and install them from [here](https://nodejs.org/en/download/).

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using npm:
'''
bash npm install node-telegram-bot-api
'''

## Usage

The bot is used to escape logtime for AFK. It can be used inline to escape in chat. For example, you can type `@iamafkbot I'm sorry; this is not a good time. I will call you later` in the chat, click the popup of your input, and this will escape AFK footprints and keep you AFK still. Do not share any private credentials via the bot.

## Code Overview

The bot uses the `node-telegram-bot-api` library to interact with the Telegram API.

The bot token is stored in the `token` constant. Make sure to replace it with your own bot token.

The bot is set to use long polling to receive updates from the Telegram server.

The `markdownV2Escape` function is used to escape special characters in a string so that it can be sent as a message in MarkdownV2 format.

The bot listens for `/start` commands and sends a message explaining how to use the bot.

The bot also listens for inline queries and responds with a message that includes the query text followed by `#afk`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
