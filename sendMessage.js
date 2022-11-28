import axios from 'axios'
import { tlgUrl } from './constants.js'

export const sendMessage = async (chat_id, text, reply_markup) => {

    await axios.post(tlgUrl, {
        chat_id,
        text,
        reply_markup
    })

    return true
}
