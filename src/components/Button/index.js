import React from 'react'
import './index.css'


function Button({name, callback}) {
    return (
        <button onClick={callback} className='button'>{name}</button>
    )
}


export {Button}
