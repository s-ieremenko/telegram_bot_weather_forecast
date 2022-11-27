import * as dotenv from 'dotenv'

dotenv.config()

export const tlgUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`