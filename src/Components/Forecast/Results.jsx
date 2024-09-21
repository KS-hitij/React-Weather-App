export default function Results({result}){
    if(!result)
        return(
            <></>
    )
    let temp=(result.main.temp - 273.15);
    return(
        <div className="results">
            <ul>
                <li>{result.weather[0].description}</li>
                <li>Temprature: {temp.toFixed(2)}</li>
            </ul>
        </div>
    )
}