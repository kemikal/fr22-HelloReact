import React from 'react';
import PropTypes from "prop-types";

function Button(props) {
    return (
        <button onClick={props.updateScore}>
            Klicka {props.score}
        </button>
    );
}

Button.propTypes = {
    score: PropTypes.number.isRequired,
    updateScore: PropTypes.func.isRequired,
}

export default Button;