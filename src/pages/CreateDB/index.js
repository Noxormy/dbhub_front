import Button from '../../components/Button/Button';
import { useState } from 'react'
import React from 'react';
import './index.sass';

function CreateDB(props) {
    let [isLoading, setLoading] = useState(false);
    const animationType = '3s ease-in-out infinite loading';
    
    return(
        <div>
            <div id='loaderPlaceholder'/>
            <div id='loader' style={isLoading ? {animation: animationType} : {animation: 'none'}}/>
            <div className='create_element'>
                <h2>Create database in one click</h2>
                <h3>Make it easy</h3>
                <Button name={'Create Database'}
                        callback={() => props.createDatabase(setLoading)
                            .then((apiKey) => props.setApiKey(apiKey))}
                />
            </div>
        </div>
    );
}

export default CreateDB;