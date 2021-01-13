import React from "react"
import './index.sass'

const ANIMATION_TYPE = '2s ease-in-out infinite loading'


function LoadingBar({isLoading}) {
    const animation = isLoading ? ANIMATION_TYPE : 'none'

    return (
        <div className='loadingBar'>
            <div className='loaderPlaceholder'/>
            <div className='loader' style={{ animation: animation}}/>
        </div>
    )
}


export {LoadingBar}