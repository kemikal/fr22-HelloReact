/* eslint-disable react/prop-types */
import React from 'react';

const isLoggedIn = <h2>Kul att se dig igen!</h2>
const notLoggedIn = <h2>Hej främling, vem är du?</h2>

function Greeting(props) {

    console.log(props);

    return (
        <div>
            {props.online ? isLoggedIn : notLoggedIn} 
            <button onClick={props.updateOnline}>{props.online ? "Logga ut" : "Logga in"}</button>
        </div>
    );
}

export default Greeting;