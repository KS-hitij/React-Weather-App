import * as React from 'react';
import Button from '@mui/material/Button';
import "./SearchButton.css"
export default function SearchButton({handleSubmit}) {
    return (
            <Button className='btn' disableRipple variant='contained' onClick={handleSubmit}>Search</Button>
    )
}