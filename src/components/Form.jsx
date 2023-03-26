import { Button, InputBase ,styled } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { getWeather } from "../services/api";

const Input = styled(InputBase)({
    color: 'whitesmoke',
    marginRight: 20,
    fontSize: 18
});
const Container = styled(Box)({
    background: '#445A6F',
    padding: 10
});
const GetButton = styled(Button)({
    background: '#e67e22'
})

const Form = ({setResult})=>{
    const [ Data , setData ] = useState({city:'', country:''})

    const handleChange =(e)=>{
       setData({...Data, [e.target.name]: e.target.value})
    }
const getWeatherInfo =async()=>{
   let response = await  getWeather(Data.city, Data.country)
   setResult(response)
}

    return(
        <Container >
           <Input placeholder="City" onChange={(e)=> handleChange(e)} name='city' /> 
           <Input placeholder="Country" onChange={(e)=> handleChange(e)} name='country' />
           <GetButton variant="contained" onClick={()=> getWeatherInfo()} > Get Weather </GetButton>
        </Container>
    )
}
export default Form;