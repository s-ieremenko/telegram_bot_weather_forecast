import { sendMessage } from "../../sendMessage.js";
import { options } from '../../options.js';

export const handler = async (event) => {

    console.log("Received an update from Telegram!!!!!", event.body);
    const body = JSON.parse(event.body)
    if (body.callback_query) {
        console.log(body.callback_query.data)
    } else {

        const { chat: { id }, text } = body.message;
        const start = async () => {

            if (text === '/start') {
                return sendMessage(id, 'Hi! Welcome to the weather forecast. To get the info enter /info')
            }
            if (text === '/info') {

                return sendMessage(id, 'hi', options.reply_markup)
            }


            return sendMessage(id, 'I do not understand that command')
        }
        await start()
    }


    return { statusCode: 200 };

}