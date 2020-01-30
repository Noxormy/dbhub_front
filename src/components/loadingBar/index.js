import React from "react";
import './index.sass'


const loadingBar ='loadingBar';
const loaderPlaceHolderCLass = 'loaderPlaceholder';
const loaderClass = 'loader';


function LoadingBar(props) {
    return (
        <div className={loadingBar}>
            <div className={loaderPlaceHolderCLass}/>
            <div className={loaderClass} style={ props.isLoading ? { animation: props.animationType } : { animation: 'none' }}/>
        </div>
    )
}


export default LoadingBar;