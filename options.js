// export const options = {
//     reply_markup: JSON.stringify({
//         inline_keyboard: [
//             [{ text: 'Weather in London', callback_data: '1' }],
//         ]
//     })
// }

export const hoursOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '3 hours', callback_data: '2' }, { text: '6 hours', callback_data: '3' }],
        ]
    })
}