import WeatherService from '../services/weatherService.js'


class WeatherController{
    async getWeatherByCity(req,res){
        const {town} =  req.query
        try {
            const data = await WeatherService.fetchWeatherByCity(town)
            res.json(data)
        } catch (err) {
            res.status(500).json({error: 'Error fetching weather'})
        }
    }

    async getWeatherByCoordinate(req,res){
        const {lat, lon} = req.query
        try {
            const data = await WeatherService.fetchWeatherByCoordinate(lat, lon)
            res.json(data)
        } catch (err) {
            res.status(500).json({error: 'Internal server error'})            
        }
    }
}



export default new WeatherController()
