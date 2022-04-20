import React from 'react';
import './Question.css';
const _ = require("lodash");

const Question = (props) => {
    return (
        <h1>{props.question}</h1>

    );
}

export default Question;