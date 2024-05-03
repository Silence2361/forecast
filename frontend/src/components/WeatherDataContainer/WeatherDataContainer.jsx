import "./WeatherDataContainer.scss";

const WeatherDataContainer = ({ data, darkMode }) => {
  const date = data.Time.split(",")[0].trim();
  const weekDay = new Date(data.Time).getDay();
  const timeHours = new Date(data.Time).getHours();

  let wd;

  switch (weekDay) {
    case 1:
      wd = "Понедельник";
      break;
    case 2:
      wd = "Вторник";
      break;
    case 3:
      wd = "Среда";
      break;
    case 4:
      wd = "Четверг";
      break;
    case 5:
      wd = "Пятница";
      break;
    case 6:
      wd = "Суббота";
      break;
    case 0:
      wd = "Воскресенье";
      break;
    default:
      break;
  }

  return (
    <div
      className={
        !darkMode
          ? "weather-data-container"
          : "weather-data-container weather-data-container__dark"
      }
    >
      <div className="weather-data-container__date">{wd}</div>
      <div
        className={
          !darkMode
            ? "weather-data-container__title"
            : "weather-data-container__title weather-data-container__title-dark"
        }
      >
        {date}
      </div>
      <div
        className={
          !darkMode
            ? "weather-data-container__description"
            : "weather-data-container__description weather-data-container__description-dark"
        }
      >
        {data.WeatherCondition}
      </div>
      <div
        className={
          !darkMode
            ? "weather-data-container__main"
            : "weather-data-container__main weather-data-container__main-dark"
        }
      >
        <div>
          <div className="weather-data-container__main-item">
            <div>Облачность:</div> <div>{data.CloudCover}</div>
          </div>
          <div className="weather-data-container__main-item">
            <div>Влажность:</div> <div>{data.Humidity}</div>
          </div>
          <div className="weather-data-container__main-item">
            <div>Температура:</div> <div>{data.Temperature}</div>
          </div>
          <div className="weather-data-container__main-item">
            <div>Скорость ветра:</div> <div>{data.WindSpeed}</div>
          </div>
        </div>
      </div>

      <div className="weather-data-container__date">{timeHours}:00</div>
    </div>
  );
};

export default WeatherDataContainer;
