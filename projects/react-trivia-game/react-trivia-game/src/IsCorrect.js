import React from 'react';

function IsCorrect(props) {
    return (
        <div className={'isCorrect_box' + (props.showCorrectAnswer ? ' isCorrect_box_display' : ' isCorrect_box_hide') + (props.correctness === "correct" ? ' isCorrect_box_correct' : ' isCorrect_box_incorrect')}>
            <div>
                Your answer of <b>{props.selectedAnswer}</b> was {props.correctness}.<br />{props.correctness == "incorrect" ? `The correct answer was '${props.correctAnswer}'` : ''}
            </div>
        </div>
    )
}

export default IsCorrect;