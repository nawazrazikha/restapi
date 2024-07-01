import axios from "axios"
import { useEffect, useState } from "react"

function AxiosGet(){
    const [userdata, setUserdata]=useState([])

    // function get(){
    //     axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    //         console.log(response)
    //         setUserdata(response.data)
    //     })
    // }

    async function get() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(response);
            setUserdata(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }
    useEffect(()=>{
      get()
    },[])
   

    return (
        <div>
            <h1>Get request</h1>
            {userdata.map((item)=>{
                return (
                    <div key={item.id}>{item.name}</div>
                )
            })}
        </div>

    )

}
export default AxiosGet