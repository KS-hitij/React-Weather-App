import { useState } from "react";
import "./Search.css"
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";
export default function Search() {
    let [city, setCity] = useState("");
    const url = import.meta.env.VITE_GEOCODE_URL;
    const key = import.meta.env.VITE_API_KEY;
    async function handleSubmit() {
        console.log("submit called");
        try {
            let response = await fetch(`${url}?q=${city}&appid=${key}`);
            if (!response.ok) {
                // Check if the response status is OK (status code 200-299)
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();

            // Handle the JSON data here
            console.log(data);
        } catch (error) {
            // Handle any errors here
            console.error('There has been a problem with your fetch operation:', error);
        }
        setCity("");
    }
    return (
        <div className="search">
            <div className="heading"><h1>Enter Your Location</h1></div>
            <SearchBox className="search-box" city={city} setCity={setCity}></SearchBox>
            <SearchButton handleSubmit={handleSubmit} />
        </div>
    )
}