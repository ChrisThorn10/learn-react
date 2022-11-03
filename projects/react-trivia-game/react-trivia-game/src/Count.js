import React from 'react';

function Count(props) {
    return (
        <div className="count_text">Question {props.index + 1} of {props.maxQuestions}</div>
    )
}

export default Count;