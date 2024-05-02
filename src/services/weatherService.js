import dotenv from 'dotenv'
import WeatherClient from '../integrations/weatherApi/weatherClient.js'
import Parser from '../lib/parser.js'
import { cityCoordinates } from '../../constants/geo.js'
import WeatherServiceShared from './shared/weatherServiceShared.js'


dotenv.config()


class WeatherService{

    async fetchWeatherByCity(city){
        console.log(city)
        const coordinates =  cityCoordinates[city]
        console.log(coordinates)
        if(!coordinates){
            throw new Error(`Coordinates for ${city} not found`)
        }
        const weatherData = await WeatherServiceShared.fetchWeatherByCoordinate(coordinates.lat,coordinates.lon)
        if (!weatherData) {
            throw new Error(`No weather data found for ${city}`);
        }
        return weatherData
    }

    async fetchWeatherByCoordinate(lat, lon){
        const weatherData = await WeatherClient.getWeather(lat,lon)

        if(!weatherData){
            console.error('No weather data received')
            return null
        }

        const forecast = await Parser.parseWeatherData(weatherData.properties.timeseries)
        
        return forecast
   }
}



export default WeatherService
