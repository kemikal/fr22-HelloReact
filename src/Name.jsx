/* eslint-disable react/prop-types */
import {useState} from 'react';

function Name(props) {

    const [inputUserName, setInputUserName] = useState("");

    // const handleChange = (e) => {
    //     setInputUserName(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sparat namn är " + inputUserName);
        props.updateUserName(inputUserName);
        setInputUserName("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputUserName} onChange={(e) => setInputUserName(e.target.value)}/> 
                <button type="submit">Spara</button>
            </form>
        </div>
    );
}

export default Name;