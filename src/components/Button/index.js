import React from 'react'
import './index.css'


function Button({name, callback}) {
    return (
        <div className='btn-cont'>
            <button onClick={callback} className='button'/>
            <label className='button-label'>{name}</label>
        </div>
    )
}


export {Button}
