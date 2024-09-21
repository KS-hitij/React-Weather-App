import { useEffect, useState } from "react";
import { motion,easeInOut } from "framer-motion";
import "./Search.css"
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";
import Results from "./Results";
export default function Search() {
    let weather="default";
    let [city, setCity] = useState("");
    let [data,setData]=useState("");
    const [background,setBackground]=useState("");
    const url = import.meta.env.VITE_GEOCODE_URL;
    const key = import.meta.env.VITE_API_KEY;
    function setBG(weather)
    {
        let weatherPath=`/assets/${weather}.jpeg`;
        console.log(weatherPath);
        setBackground(weatherPath);
    }
    async function handleSubmit() {
        console.log("submit called");
        try {
            let response = await fetch(`${url}?q=${city}&appid=${key}`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            let jsonRes = await response.json();
            console.log(jsonRes);
            weather=jsonRes.weather[0].main;
            console.log(weather);
            
            setBG(weather);
            setData((oldData)=>jsonRes);
            console.log(data);
            
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            setData("");
            setBackground("");
        }
        setCity("");
    }
    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };
    return (
        <motion.div className="search" style={background? {backgroundImage:`url(${background})`}:{}} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8, ease:easeInOut}}>
            <div className="heading"><h1>Enter Your Location</h1></div>
            <SearchBox className="search-box" city={city} setCity={setCity} handleKeyUp={handleKeyUp} ></SearchBox>
            <SearchButton handleSubmit={handleSubmit} />
            <Results result={data}></Results>
        </motion.div>
    )
}