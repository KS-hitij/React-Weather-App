import Header from "../Home/Header"
import Footer from "../Home/Footer"
import Search from "./Search"
import "./Forecast.css"
export default function Forecast(){
    return(
        <div className="forecast">
            <Header></Header>
            <div className="container"><Search></Search></div>
            <Footer className="footer" links={["Mail","LinkedIn","GitHub"]} linkSrc={["","www.linkedin.com/in/kshitij-mamgain-24b4232b9","https://github.com/KS-hitij"]}></Footer>
        </div>
    )
}