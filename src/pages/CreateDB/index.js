import Button from "../../components/Button";
import React from "react";
import './index.sass'

function CreateDB(props) {
    return(
        <div className="create_element">
            <h2>Create database in one click</h2>
            <h3>Make it easy</h3>
            <Button name={"Create Database"} callback={props.callback}/>
        </div>
    );
}

export default CreateDB;