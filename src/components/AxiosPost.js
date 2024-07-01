import axios from "axios";
import { useEffect, useState } from "react";

const AxiosPost=()=>{
 
 const movie={
    startDate:new Date(),
    endDate:new Date().toTimeString()
 }

 async function post(){
    try{
        const response=await axios.post('https://lunara-http-default-rtdb.firebaseio.com/movies.json',{
            method:'POST',
            body:JSON.stringify(movie),
            headers:{
                'Content-Type':'Application/json'
            }
        })
        console.log(response)
        
    }catch(err){
        console.log(err)
    }
    
    
 }
 useEffect(()=>{
    post()
 },[])

return (
    <div>post data</div>
)
}
export default AxiosPost;
