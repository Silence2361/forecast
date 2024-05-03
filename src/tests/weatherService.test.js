import WeatherService from '../services/weatherService.js';
import { cityCoordinates } from '../../constants/geo.js';


test(' returns correct data for a known city', async () => {
    const city = 'Moscow'
    const data = await WeatherService.fetchWeatherByCity(city);
    expect(data).toBeDefined();
    data.forEach(item => {
        expect(item).toHaveProperty('Temperature');
    });
});