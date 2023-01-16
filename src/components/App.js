// create your App component here

import React,{useState, useEffect} from "react";


function App() {
    const [dogSan, setDogSan]= useState(null)
    
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((data)=>{
            setDogSan(data.message);
        })

    }, []);

    if(!dogSan)return<p>Loading...</p>

    return<img  src={dogSan} alt="A Random Dog"/>
}
export default App;