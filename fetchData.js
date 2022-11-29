import axios from 'axios'

export const fetchData = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Amsterdam&units=metric&cnt=6&appid=${API_TOKEN}`);
        console.log(JSON.parse(response))
        return response


    } catch (e) {
        console.log(e)
    }
}


