import React,{createContext,useContext,useState,useEffect} from 'react';

const AppContext = createContext()

const AppProvider=({children})=>{
    const [userweather,setuserweather] = useState({})
    const [allow,setallow] = useState()
    const [search,setsearch] = useState('')
    const [hour,sethour]=useState([])
    const [location,setLocation] = useState([-6.121435,106.774124
       ])

     
       
       function getLocation() {
             if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);
                 
              } else { 
                     alert("Geolocation is not supported by this browser.")
        
               } 
        }
     
      
        function showPosition(position) {
            let val=[position.coords.latitude , position.coords.longitude]
            setLocation(val)
        }
     
       

        useEffect(()=>{
            getLocation()
   },[])
    return(
        <AppContext.Provider value={{valuehour:[hour,sethour],value:[location,setLocation],value1:[userweather,setuserweather],search,setsearch,getLocation,showPosition,value3:[allow,setallow]}}>
            {children}
        </AppContext.Provider>
    )

}
export const UseGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppProvider,AppContext} 