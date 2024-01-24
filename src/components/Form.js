import React from 'react';
import './App.css';




const Form = props => {
    return (
        <form >
            <input
                type="text"
                className="Wyszukiwarka"
                value={props.value}
                placeholder="Wpisz miasto"
                onChange={props.change}
            />

        </form>
    )
}

export default Form