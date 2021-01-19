import React, {useState} from 'react'
import './index.sass'


function Toggle({buttons, started, className, cb}) {
    let [curr, setCurr] = useState(started)

    let toggleButton = (el) => {
        if(el.name === curr.name) {
            return
        }
        setCurr(el)
        cb(el)
    }
    let getData = createGetDataFunc(curr, buttons, toggleButton)

    let buttonBlocks = buttons.map((element, key) => {
        let [classNames, onClick] = getData(element)
        return (<div className={`toggleButton ${classNames}`} onClick={onClick} key={key}>{element.name}</div>)
    })
    
    return(
        <div className={`toggleButtons ${className}`}>{ buttonBlocks }</div>
    )
}


function createGetDataFunc(curr, buttons, toggleButton) {
    let activeButtonsCount = buttons.reduce((res, el) => !el.isDisabled ? res++ : res, 0)
    return (element) => {
        let toggledClass = element.name === curr.name ? 'toggled' : ''
        let disabledClass = element.isDisabled ? 'disabled noResize' : activeButtonsCount <= 1 ? 'noResize' : ''
        let onClick = element.isDisabled ? () => {} : () => toggleButton(element)

        if(element.isDisabled)
            element.name = '⊘'.concat(' ', element.name)

        return[`${toggledClass} ${disabledClass}`, onClick]
    }
}


export {Toggle}