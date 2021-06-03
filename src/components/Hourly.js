import React,{useEffect,useState} from 'react'
import {UseGlobalContext} from './context'
import data from './Hour'
function Hourly() {
   
    const {value,valuehour}=UseGlobalContext()
    const [location,setlocation]=value
    const [hour,sethour]=valuehour

    let URL=`https://api.openweathermap.org/data/2.5/onecall?lat=${location[0]}&lon=${location[1]}&exclude=current,minutely,daily&appid=db53ea55e7b17f349cb27cb8957d9a25`
    async function Hour(){
        const response = await fetch(URL)
        const data= await response.json();
        sethour(data.hourly)
      
    }
    useEffect(()=>{
        Hour()
    },[location])
   
    function KtoC(K){
        return Math.floor(K - 273.15);
  
      }
    return (
    <div className="flex justify-center w-screen  text-center font-medium">
        <div className="overflow-x-scroll containerhour">
            <div className="  flex   hour">
                {hour && hour.slice(0,24).map((h,i)=>(
                    
                    <div className="w-40 h-56 m-2 rounded-2xl p-2 bg-blue-100 bg-opacity-25">
                    
                            <h1 className="text-lg font-bold" >{data[i].clock}</h1>
                              <h1 >{KtoC(h.temp)}°C</h1>
                              <h1>{h.weather[0].main}</h1>
                              <h1 className="font-thin">{h.weather[0].description}</h1>
                              <img src={`https://openweathermap.org/img/wn/${h.weather[0].icon}@2x.png`} alt=""/>

                    </div>
                  
                ))}
            </div>
        </div>
    </div>
       
    )
}

export default Hourly
