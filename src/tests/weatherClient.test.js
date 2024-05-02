import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import WeatherClient from "../../src/integrations/weatherApi/weatherClient.js"
import dotenv from 'dotenv'

dotenv.config()



describe('WeatherClient', () => {
    const mock = new MockAdapter(axios);
    const lat = 55.7558;
    const lon = 37.6173; 

    beforeEach(() => {
        mock.reset();
    });

    it('should fetch weather data successfully', async () => {
        const fakeResponse = {
            data: {
                temperature: 20,
                summary: 'Clear sky'
            }
        };
        mock.onGet(`${process.env.WEATHER_API_URL}?lat=${lat}&lon=${lon}`).reply(200, fakeResponse);

        const result = await WeatherClient.getWeather(lat, lon);
        expect(result).toEqual(fakeResponse);
        console.log('Test URL:', `${process.env.WEATHER_API_URL}?lat=${lat}&lon=${lon}`);
    });

    it('should handle network errors gracefully', async () => {
        mock.onGet(`${process.env.WEATHER_API_URL}?lat=${lat}&lon=${lon}`).networkError();

        const result = await WeatherClient.getWeather(lat, lon);
        expect(result).toBeNull();
    });
});