import React from 'react';

function Answer(props) {
    return (
        <React.Fragment>
            {props.answerChecked === "true" ?
            <input type="radio" id={props.answerLabel} name="answer" value={props.answerText} defaultChecked={true}/>
            :
            <input type="radio" id={props.answerLabel} name="answer" value={props.answerText} />
            }
            <label className="answer_text" htmlFor={props.answerLabel}>{props.answerText}</label><br />
        </React.Fragment>
    )
}

export default Answer;