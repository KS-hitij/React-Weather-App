import TextField from '@mui/material/TextField';
import "./SearchBox.css"
export default function SearchBox({city,setCity,handleKeyUp}) {
  function handleChange(event){
    setCity(event.target.value);
  }
  return (
    <div>
         <input type="text" value={city} onChange={handleChange} onKeyUp={handleKeyUp}/>
    </div>
  );
}
