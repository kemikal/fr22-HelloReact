/* eslint-disable react/prop-types */
//import React from 'react';

function User(props) {

    console.log(props)

    return (
        <div>
            Name: {props.name}<br/>
            Email: {props.email}<br/>
            Age: {props.age}<br/>
        </div>
    );
}

export default User;