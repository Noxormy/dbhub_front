import React, {useState} from 'react'
import './index.sass'


function Toggle({buttons, className, cb}) {
    let [curr, setCurr] = useState(0)
    let onClick = (key) => {
        setCurr(key)
        cb(key)
    }

    let buttonBlocks = buttons.map((element, key) => {
        let className = key === curr ? 'toggled' : '' 
        return (<div className={`toggleButton ${className}`} onClick={() => onClick(key)} key={key}>{element}</div>)
    })
    
    return(
        <div className={`toggleButtons ${className}`}>{ buttonBlocks }</div>
    )
}


export {Toggle}