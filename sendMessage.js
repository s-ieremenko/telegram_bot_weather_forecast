import axios from 'axios'
import { tlgUrl } from './constants.js'

export const sendMessage = async (chat_id, text) => {
    await axios.post(tlgUrl, {
        chat_id,
        text
    })
    return true
}
