import React from 'react';
import './index.css';


function Button(props) {
    return (
        <button onClick={props.callback} className='button'>{props.name}</button>
    );
}


export default Button;
