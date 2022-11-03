import React from 'react';
import Answer from './Answer';



function AnswerSet(props) {

        return (
            <div style={{display: props.showCorrectAnswer ? 'none' : 'block' }}>
                A. <Answer answerText={props.answerText[0]} answerLabel="a0" answerChecked="true" />
                B. <Answer answerText={props.answerText[1]} answerLabel="a1" />
                C. <Answer answerText={props.answerText[2]} answerLabel="a2" />
                D. <Answer answerText={props.answerText[3]} answerLabel="a3" />
                <button className="button_submit_lg" onClick={() => props.checkCorrectAnswer}>Submit Answer</button>
            </div>
        )
}

export default AnswerSet;