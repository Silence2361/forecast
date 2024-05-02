import Parser from '../lib/parser.js'

describe("Parser", () => {
    const mockWeatherData = [
        {
            time: "2024-05-01T10:00:00Z",
            data: {
                instant: {
                    details: {
                        air_temperature: 15.5,
                        cloud_area_fraction: 12.5,
                        relative_humidity: 50.3,
                        wind_speed: 4.5
                    }
                },
                next_6_hours: {
                    summary: {
                        symbol_code: "clearsky_day"
                    }
                }
            }
        },
        {
            time: "2024-05-01T11:00:00Z",
            data: {
                instant: {
                    details: {
                        air_temperature: 16.2,
                        cloud_area_fraction: 27.3,
                        relative_humidity: 47.6,
                        wind_speed: 5.1
                    }
                },
                next_6_hours: {
                    summary: {
                        symbol_code: "partlycloudy_day"
                    }
                }
            }
        }
    ];

    it("should correctly parse weather data into formatted forecast objects", () => {
        const result = Parser.parseWeatherData(mockWeatherData);
        expect(result).toEqual([
            {
                Time: new Date("2024-05-01T10:00:00Z").toLocaleString(),
                Temperature: "15.5°C",
                CloudCover: "12.5%",
                Humidity: "50.3%",
                WindSpeed: "4.5 m/s",
                WeatherCondition: "clearsky_day"
            },
            {
                Time: new Date("2024-05-01T11:00:00Z").toLocaleString(),
                Temperature: "16.2°C",
                CloudCover: "27.3%",
                Humidity: "47.6%",
                WindSpeed: "5.1 m/s",
                WeatherCondition: "partlycloudy_day"
            }
        ]);
    });

    it("should handle missing optional data gracefully", () => {
        const incompleteData = [
            {
                time: "2024-05-01T12:00:00Z",
                data: {
                    instant: {
                        details: {
                            air_temperature: 17,
                            cloud_area_fraction: 10,
                            relative_humidity: 45,
                            wind_speed: 5
                        }
                    }
                }
            }
        ];

        const result = Parser.parseWeatherData(incompleteData);
        expect(result).toEqual([
            {
                Time: new Date("2024-05-01T12:00:00Z").toLocaleString(),
                Temperature: "17°C",
                CloudCover: "10%",
                Humidity: "45%",
                WindSpeed: "5 m/s",
                WeatherCondition: undefined  
            }
        ]);
    });
});