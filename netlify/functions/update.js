import { sendMessage } from "../../sendMessage.js";
import { options } from '../../options.js';

export const handler = async (event, context, callback) => {
    // console.log(event.queryStringParameters);
    // console.log("Received an update from Telegram!!!!!", event.body);

    // console.log('ev', event, 'ctx', context, 'cll', callback)
    const { chat: { id }, text, data } = JSON.parse(event.body).message;
    const start = async () => {
        // console.log(JSON.parse(event.body).data)

        if (text === '/start') {
            return sendMessage(id, 'Hi! Welcome to the weather forecast. To get the info enter /info')
        }
        if (text === '/info') {
            // console.log(event.body)
            // console.log('q', event.queryStringParameters)
            return sendMessage(id, 'hi', options.reply_markup)

            // return sendMessage(id, 'callback', `data is ${data}`)
        }
        if (event.queryStringParameters) {
            console.log(queryStringParameters)
        }
        return sendMessage(id, 'I do not understand that command')
    }
    await start()

    return { statusCode: 200 };
};