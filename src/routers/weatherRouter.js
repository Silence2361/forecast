import { Router } from "express";
import WeatherController from '../controllers/weatherController.js'

const router = new Router()

router.get('/forecast/city', WeatherController.getWeatherByCity)

router.get('/forecast/coordinates', WeatherController.getWeatherByCoordinate)

export default router