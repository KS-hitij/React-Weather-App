import "./Dashboard.css"
export default function Dashboard(){
    return(
        <div className="dashboard">
            <h3><i className="fa-solid fa-house icons"></i>&nbsp;&nbsp;Home</h3>
            <h3><i className="fa-solid fa-temperature-full icons"></i>&nbsp;&nbsp;Forecast</h3>
            <h3><i className="fa-solid fa-address-card icons"></i>&nbsp;&nbsp;About</h3>
        </div>
    )
}