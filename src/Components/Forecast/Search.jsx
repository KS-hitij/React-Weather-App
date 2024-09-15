import "./Search.css"
import Button from '@mui/material/Button';
export default function Search(){
    return(
        <div className="search">
            <h1>Enter Your Location</h1>
            <input type="text" />
            <Button variant="contained" className="search_btn" color="primary">Search</Button>
        </div>
    )
}