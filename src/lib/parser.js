class Parser{
     parseWeatherData(weatherData) {
        const forecasts = weatherData.map(entry => {
            const { time, data } = entry;
            const { air_temperature, cloud_area_fraction, relative_humidity, wind_speed } = data?.instant?.details;
            // const { air_temperature_max, air_temperature_min } = data.next_6_hours.details;
            const symbol_code = data?.next_6_hours?.summary?.symbol_code;
            
            return {
                Time: new Date(time).toLocaleString(),
                Temperature: `${air_temperature}°C`,
                // MaxTemperature: `${air_temperature_max}°C`,
                // MinTemperature: `${air_temperature_min}°C`,
                CloudCover: `${cloud_area_fraction}%`,
                Humidity: `${relative_humidity}%`,
                WindSpeed: `${wind_speed} m/s`,
                WeatherCondition: symbol_code
            };
        });
    
        return forecasts;
    }
}

export default new Parser()


