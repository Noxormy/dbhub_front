import React, { useState } from 'react'
import './index.sass'

function Toggle(props) {
    let [isToggled, setToggle] = useState(false);
    let buttons = props.buttons.map((element, key) => {
        let className = isToggled ? 'toggleButton toggled' : 'toggleButton';
        return (
            <div className={className}
                 key={key} onClick={() => setToggle(!isToggled)}>
                {element}
            </div>
        )});
    
    return(
        <div className='toggleButtons'>
            { buttons }
        </div>
    )
}

export default Toggle