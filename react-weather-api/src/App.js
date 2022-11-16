import React from "react";
import  ReactDOM from "react-dom";
import axios from 'axios'


function App() {

  const [data, setData] = React.useState({})
  const [location,setLocation] =React.useState(''
  
  )
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=47a3e382ca27c6b4cefa1ce1caaa0965&units=metric`
  
  const searchLocation =(event) =>{

    if(event.key === 'Enter'){
    fetch(url)
    .then(res=>res.json())
    .then((response)=>{
      setData(response)
      console.log(response)
    })
    .catch(error=>console.log(error))
    setLocation('')
  }
  }


  return (
    <div className="app">

      <div className="search">
        <input onChange={event => setLocation(event.target.value)} placeholder="Enter Location" 
        type="text" 
        value={location}
        onKeyPress={searchLocation}
         />
      </div>
      
      <div className="container">
        <div className="top">
            <div className="location">
              {data.name ?<p>{data.name}</p> : null}
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> :null}
            </div>
        </div>
        { data.name != undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}°C</p> : null}
          <p>Feels Likd</p>
            
          </div>
          <div className="humidity">
             {data.main ?  <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPH</p> :null}
            <p>Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
