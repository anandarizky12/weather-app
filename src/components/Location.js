import React,{useEffect} from 'react'
import {UseGlobalContext} from './context'
import Search from './Search'


function Location() {
    const {value,getLocation,value1} =UseGlobalContext()
    const [location,setLocation] =value
    const [userweather,setuserweather]=value1
    
 
    useEffect(()=>{
        Weather();
    },[location]);

 
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=db53ea55e7b17f349cb27cb8957d9a25`;
    
    async function Weather(){
       
        const response=await fetch(url);
        const data=await response.json();
        setuserweather(data)
    }
    
    function KtoC(K){
        return Math.floor(K - 273.15);
  
      }
  console.log(userweather);
    return (
        <div>
            {userweather !== null && 
            <>
           
            <div className="w-screen h-96  flex flex-col justify-center p-11">
                       <Search/>
                        <h1 className="text-4xl sm:font-bold sm:5xl">{userweather.name}</h1>  
                        <div className="flex items-center">
                                <img className="w-20 sm:w-32 sm:h-25" src={`https://openweathermap.org/img/wn/${userweather.weather && userweather.weather[0].icon}@2x.png`} />
                                <h1 className="text-3xl sm:text-7xl ">{userweather.main && KtoC(userweather.main.temp)}°C</h1>
                                        <div className="flex justify-between flex-col m-4 h-16">
                                            <p className="text-2xl sm:text-3xl font-bold">{userweather.weather && userweather.weather[0].main}</p>
                                            <p className="text-xs sm:text-base">Perkiraan Suhu Paling Maksimal Adalah {userweather.main && KtoC(userweather.main.temp_max)}°C </p>
                                        </div>
                                {/* <h1 >{userweather.wind && userweather.wind.speed}</h1> */}
                              
                        </div>
                      
            </div>
                
            </>
            }
        </div>
    )
}

export default Location


       