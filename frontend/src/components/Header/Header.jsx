import "./Header.scss";
import header_logo from "./../../assets/images/header-logo.png";

const Header = ({
  onChangeCity,
  searchCity,
  changeMode,
  darkMode,
  onChangeLat,
  onChangeLon,
}) => {
  return (
    <header
      className={
        !darkMode
          ? "header header__background-white"
          : "header header__background-dark"
      }
    >
      <div
        className={
          !darkMode ? "header__logo" : "header__logo header__logo-dark"
        }
      >
        <img src={header_logo} alt="logo" />
        <span>Weather App</span>
        <div className="header__nightMode">
          <span>
            <input
              type="checkbox"
              onChange={
                !darkMode ? () => changeMode(true) : () => changeMode(false)
              }
            />
          </span>
        </div>
      </div>
      <div className="header__search-block">
        <input
          className="header__search"
          placeholder={"Название города"}
          type="search"
          onChange={onChangeCity}
        />
        <input
          className="header__search"
          placeholder={"Lat"}
          type="search"
          onChange={onChangeLat}
        />
        <input
          className="header__search"
          placeholder={"Lon"}
          type="search"
          onChange={onChangeLon}
        />

        <button className="header__search-btn" onClick={searchCity}>
          {"Поиск"}
        </button>
      </div>
    </header>
  );
};

export default Header;
