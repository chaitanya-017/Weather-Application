import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 31.8,
    humidity: 74,
    temp: 28.27,
    tempMax: 28.27,
    tempMin: 28.27,
    weather: "overcast clouds",
  });
  
  let updateInfo =(result)=>{
    setWeatherInfo(result);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo}/>
    </div>
  );
};

export default WeatherApp;
