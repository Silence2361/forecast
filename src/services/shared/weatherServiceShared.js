import WeatherClient from "../../integrations/weatherApi/weatherClient.js";
import Parser from "../../lib/parser.js"


class WeatherServiceShared{

    async fetchWeatherByCoordinate(lat, lon){
        try {
        const weatherData = await WeatherClient.getWeather(lat,lon)
        if(!weatherData){
            console.error('No weather data received')
            throw new Error('Invalid weather data received')
        }
        const forecast = await Parser.parseWeatherData(weatherData.properties.timeseries)
        return forecast
        }catch(error){
            console.error('Error fetching weather data:', error);
            throw error
        }
    }
}

export default new WeatherServiceShared()
// export default new WeatherServiceShared(WeatherServiceShared)





