import axios from 'axios';
const API_KEY = '8d2a110b6ad468ae1a0e459757cf659d';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

// const API_KEY = '2b5e363735mshfc3f75855c46117p15b913jsn1463fa2fd64f';
// const API_URL = 'https://forecast9.p.rapidapi.com/';





export const getWeather = async(city , country)=>{
    try{
     let response =  await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
     return response.data

    }catch(error){
        console.log(error.message);
        return error.response;
    }
}
