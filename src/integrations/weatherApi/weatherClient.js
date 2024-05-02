import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

class WeatherClient{
    static async getWeather(lat, lon){

        const url = `${process.env.WEATHER_API_URL}?lat=${lat}&lon=${lon}`
        
        try {
                console.log("URL being requested:", url)
            const weather = await axios.get(url,{
                headers: {
                    'User-Agent': 'MyWeatherApp/1.0 (myemail@example.com)'
                }
        })
            console.log(weather.data);
            return weather.data;
        } catch (error) {
            console.error('Failed to fetch weather data:', error);
            if (error.response) {
                console.log('Response Data:', error.response.data);
                console.log('Status Code:', error.response.status);
                console.log('Headers:', error.response.headers);
            } else if (error.request) {
                console.log('No response from server:', error.request);
            } else {
                console.log('Error setting up request:', error.message);
            }
            return null;
        }
    }
}


export default WeatherClient