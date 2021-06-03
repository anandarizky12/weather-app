import React,{useEffect} from 'react'
import {UseGlobalContext} from './context'


function Search() {
    const {search,setsearch}=UseGlobalContext();
    const {value} =UseGlobalContext()
    const [location,setLocation] =value
    let URL=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=db53ea55e7b17f349cb27cb8957d9a25`;

    async function SearchUrl(){
        const response= await fetch(URL);
        const data=await response.json();
       try {
        if(data.coord){
            const val= [data.coord.lat,data.coord.lon]
            setLocation(val);
        }
       
      }
      catch(err) {
        alert('Lokasi Tidak Ditemukan')
      }
    }    
    function Search(e){
       e.preventDefault();
       setsearch('');
       if(search){
           SearchUrl();
       }
       else{
           alert("Input Null")
       }
    }
    function getSearch(e){
        setsearch(e.target.value)
    }
    return (
        <div className=" fixed top-5 sm:right-6  sm:top-3" >
            <form onSubmit={Search}>
                    <input className="text-black h-9 w-72 rounded-2xl p-4 outline-none" value={search} onChange={getSearch} type="text" placeholder="Cari ..."/>
            </form>
         
        </div>
    )
}

export default Search
