import { sendMessage } from "../../sendMessage.js";

export const handler = async (event) => {
    console.log("Received an update from Telegram!!!!!", event.body);
    const { chat: { id }, text } = JSON.parse(event.body).message;
    await sendMessage(id, text)


    return { statusCode: 200 };
};