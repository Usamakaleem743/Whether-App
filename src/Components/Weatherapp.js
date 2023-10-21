import React, { useEffect, useState } from 'react'
import './Style.css'
import search1 from './images/search.png'
import fresh from './images/fresh.webp'
import wind from './images/wind.png'
import humidity from './images/humidity.png'
const Weatherapp = () => {
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState('Lahore');
    
    useEffect(()=>{
      const fetchapi=async()=>{
          const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c19cab4c3621df049b4559e068cf14c6`;
          await fetch(url)
          .then((res)=>res.json())
          .then(res=> {
            setCity(res.main)
          })
      }
      fetchapi()
    },[search])


  return (
    <div className='container'>
      <div className="topbar">
        <input type="text" onChange={e=>setSearch(e.target.value)} className='searchinput' placeholder='Search City'/>
      </div>
      <div className="weather-image">
        <img src={fresh} alt="" />
      </div>
      {!city ? (<h2 style={{color:'white'}}>No City Found</h2>) : (
        <div>
          <div className="weather-temp">{city.temp}° c</div>
      <div className="weather-location">{search}</div>
      <div className="data-container">
        <div className="element">
            <img src={wind} alt="" className='icon'/>
             <div className="data">
                <div className="humidity">{city.pressure} hPa</div>
                <div className="text">Pressure</div>
             </div>
        </div>
        <div className="element">
            <img src={humidity} alt="" className='icon'/>
             <div className="data">
                <div className="wind">{city.humidity} %</div>
                <div className="text">Humidity</div>
             </div>
        </div>
      </div>
        </div>
      )}
      
    </div>
  )
}

export default Weatherapp
