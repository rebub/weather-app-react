import React, { useState } from "react";
 
const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
 
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  var today = new Date();
  var time = today.getHours();

  const search = evt => {

    if (evt.key === "Enter") {

      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)

      .then(res => res.json())

      .then(result => {

        setWeather(result);

        setQuery("");

      });

    }
  }

  const dateBuilder = (d) => {

    let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
  }


  return ( 

    <div className = {(time > 19) ? "app day" : "app night"}>


      <main>

        <div className="search-box">
          <input type="text" className="search-bar" placeholder="location search 📍" 
          onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
        </div>

        <div className="sun"></div>
        <div className="moon"></div>

        <div className="allstars">
          <div className="star1"></div>
          <div className="star2"></div>
          <div className="star3"></div>
          <div className="star4"></div>
          <div className="star5"></div>
          <div className="star6"></div>
          <div className="star7"></div>
          <div className="star8"></div>
          <div className="star9"></div>
          <div className="star10"></div>
          <div className="star11"></div>
          <div className="star12"></div>
          <div className="star13"></div>
          <div className="star14"></div>
          <div className="star15"></div>
          <div className="star16"></div>
          <div className="star17"></div>
          <div className="star18"></div>
          <div className="star19"></div>
          <div className="star20"></div>
          <div className="star21"></div>
          <div className="star22"></div>
          <div className="star23"></div>
          <div className="star24"></div>
          <div className="star25"></div>
          <div className="star26"></div>
          <div className="star27"></div>
          <div className="star28"></div>
          <div className="star29"></div>
          <div className="star30"></div>
        </div>

        <div>

          {(typeof weather.main != "undefined") ? (
            <div className="main-items">

              <div className="location-box">
                <div className="location">{weather.name}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
            
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}ºC</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>

            </div>
          ) : (
            <div className="main-items">

              <div className="location-box">
                <div className="location"></div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
            
              <div className="weather-box">
                <p>search for a location</p>
              </div>

            </div>
          ) }

        </div>

      </main>

    </div>
  );
}

export default App; 
