import TitleCard from "./TitleCard"
import Dashboard from "./Dashboard"
import "./Header.css"
export default function Header(){
    return(
        <div className="header">
            <TitleCard></TitleCard>
            <p className="tagline">Stay Ahead Of Storm</p>
            <Dashboard></Dashboard>
        </div>
    )
}