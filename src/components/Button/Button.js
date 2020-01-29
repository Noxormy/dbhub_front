import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <button onClick={props.callback} className='button'>{props.name}</button>
    );
}

export default Button;
