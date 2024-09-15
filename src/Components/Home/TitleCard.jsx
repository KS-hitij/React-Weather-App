import logo from "../../assets/storm.png"
import "./TitleCard.css"
export default function TitleCard(){
    return(
        <>
            <span><img className="logo" src={logo}/><p className="title">WeatherNow</p></span>
        </>
    )
}