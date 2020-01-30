import React from 'react'
import './index.sass'


const buttonsBlockClass = 'toggleButtons';
const buttonClass = 'toggleButton';
const toggledClass = 'toggled';


function Toggle(props) {
    let buttons = props.buttons.map((element, key) => {
        let className = buttonClass;
        className += key === props.toggledKey ? ' ' + toggledClass : '' ;
        return (<div className={className} onClick={() => props.setToggledKey(key)} key={key}>{element}</div>)
    });
    
    return(
        <div className={buttonsBlockClass + ' ' + props.className}>{ buttons }</div>
    )
}


export default Toggle