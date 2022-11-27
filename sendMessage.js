import axios from 'axios'
import { tlgUrl } from './constants.js'

export const sendMessage = async (chat_id, text, reply_markup) => {

    const res = await axios.post(tlgUrl, {
        chat_id,
        text,
        reply_markup
    })
    // console.log(res)
    return true
}
// export const sendOptions = async (chat_id, options) => {
//     await axios.post(tlgUrl, {
//         chat_id,
//         options
//     })
//     return true
// }