import "./Main.scss";
import * as axios from "axios";
import { useEffect, useState } from "react";
import Header from "./../Header/Header";
import WeatherDataContainer from "../WeatherDataContainer/WeatherDataContainer";

const Main = ({ darkMode, changeMode }) => {
  const [currentCity, setCurrentCity] = useState("");
  const [lat, setCurrentLat] = useState("");
  const [lon, setCurrentLon] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const searchCity = async () => {
    if (currentCity) {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/forecast/city?town=${currentCity}`
        );
        setWeatherData(response.data);
      } catch (error) {
        alert(error);
      }

      return;
    }

    if (lat && lon) {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/forecast/coordinates?lat=${+lat}&lon=${+lon}`
        );
        setWeatherData(response.data);
      } catch (error) {
        alert(error);
      }

      return;
    }
  };

  const testReq = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/forecast/city?town=Moscow"
      );
      setWeatherData(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    testReq();
  }, []);

  const onChangeCity = (e) => {
    setCurrentCity(e.currentTarget.value);
  };

  const onChangeLat = (e) => {
    setCurrentLat(e.currentTarget.value);
  };

  const onChangeLon = (e) => {
    setCurrentLon(e.currentTarget.value);
  };

  return (
    <div className="content">
      <Header
        onChangeCity={onChangeCity}
        onChangeLat={onChangeLat}
        onChangeLon={onChangeLon}
        searchCity={searchCity}
        changeMode={changeMode}
        darkMode={darkMode}
      />
      <div className="main-flex-container">
        {(weatherData || [])
          .filter((el) => el.Time.includes("3:00:00 PM"))
          .map((el, index) => (
            <WeatherDataContainer key={index} data={el} darkMode={darkMode} />
          ))}
      </div>
    </div>
  );
};

export default Main;
