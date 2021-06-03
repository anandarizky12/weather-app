
import './App.css';
import Location from "./components/Location"
import Hourly from './components/Hourly'
import React,{useState,useEffect} from "react";
import {UseGlobalContext, UsrGlobalContext} from './components/context';


function App() {


  const Rain="https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
  const Cloud="https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
  const Sun="https://images.unsplash.com/photo-1504386106331-3e4e71712b38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"


  const {value3,value1,value}=UseGlobalContext()
  const [userweather,setuserweather]=value1
  const [bg,setbg]=useState('')

  useEffect(()=>{

    if(userweather.weather){
      if(userweather.weather[0].main==="Clouds"){
        setbg(Cloud)
      }
      else if(userweather.weather[0].main==="Rain"){
        setbg(Rain)
      }else{
        setbg(Sun)
      }
    }
    
  },[userweather])
  return (
    <div className="App" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bg})`,backgroundSize:'cover',backgroundPosition:'center'}}>
      <Location/>       
      <Hourly/>
      <div className="w-screen  flex items-center justify-center text-white text-xs fixed bottom-0 opacity-20">
       <p>Copyright@Snoopy & openweathermap.org</p>
      </div>
    </div>
 
  
  );
}

export default App;
