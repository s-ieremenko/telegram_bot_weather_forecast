import axios from 'axios'

export const fetchData = async () => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Amsterdam&units=metric&cnt=6&appid=bd454f206694adec26f420040e1acd52');
        return response.list.find(item => item.weather)


    } catch (e) {
        console.log(e)
    }
}


