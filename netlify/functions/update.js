import { sendMessage } from "../../sendMessage.js";
import { hoursOptions, options } from '../../options.js';
import { fetchData } from "../../fetchData.js";

export const handler = async (event) => {
    console.log('event', event)

    console.log("Received an update from Telegram!!!!!", event.body);
    const body = JSON.parse(event.body)
    if (body.message) {

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
    } else if (body.callback_query) {
        const id = body.callback_query.from.id
        const data = body.callback_query.data

        switch (data) {
            case '1':
                return sendMessage(id, 'hello', hoursOptions.reply_markup)
            case '2':
                const res = await fetchData()
                return sendMessage(id, res)
            default:
                console.log('hello')
        }
    }


    return { statusCode: 200 };

}

