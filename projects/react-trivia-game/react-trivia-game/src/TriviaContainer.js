import React, { useState } from 'react';
import Header from './Header';
import Question from './Question';
import AnswerSet from './AnswerSet';
import IsCorrect from './IsCorrect';
import Count from './Count';
import GameOver from './GameOver';

const TriviaContainer = () => {

    let triviaQuestions;

    // Retrieve trivia questions from the json file
    const LoadQuestions = () => {        
        fetch('trivia.json'
            ,{
                headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            }
        )
        .then(function(response){
            return response.json();
        })
        .then(function(triviaJson) {
            //shuffle questions
            triviaQuestions = triviaJson.sort((a, b) => 0.5 - Math.random());
            setNumQuestions(triviaQuestions.length +1);
        });
    }

    //should these be const or let ??
    const [question, setQuestion] = useState('Why did the chicken cross the road?');
    const [answers, setAnswers] = useState(["To get to the other side", "To get a chicken salad", "To catch his Uber", "To meet a friend"]);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [index, setIndex]= useState(0);
    const [showCorrectAnswer, setShowCorrectAnswer]= useState(false);
    const [answerSelected, setAnswerSelected]= useState("");
    const [numQuestions, setNumQuestions]= useState(0);
    

    const handleSubmit = e => {
        e.preventDefault();
        checkCorrectAnswer();
        setShowCorrectAnswer(true);

        if(numQuestions !== index+1){
            setTimeout(() => {
                getNextQuestion();
            }, "3500");
        } else {
            gameOver();
        }
    };

    const gameOver = () => {
        console.log('Game Over');
        let triviaGame = document.querySelector('#triviaGame');
        triviaGame.style.display = 'none';

        let gameOverMessage = document.querySelector('#gameOver');
        gameOverMessage.style.display = 'block';
        //console.log(triviaGame);

    }

    const checkCorrectAnswer = () => {

        //retrieve user's selected input/answer
        const answerOptions = document.querySelectorAll('input[name="answer"]')
        for (const a of answerOptions) {
            if (a.checked) {
                
                // why is the first cl correct, but the second c.l incorrect?
                console.log(`a.value: ${a.value}`)
                setAnswerSelected(a.value);
                console.log(`answerSelected: ${answerSelected}`)
            }
        }

        //answerSelected == answers[correctAnswer]?console.log("correct"):console.log("incorrect")
        //console.log(`answerSelected value: ${answerSelected}`)
    }

    LoadQuestions();

    const getNextQuestion = () => { 
        setShowCorrectAnswer(false);       
        setIndex(index+1);
        setQuestion(triviaQuestions[index].question);
        setAnswers([triviaQuestions[index].correctAnswer, triviaQuestions[index].incorrectAnswers[0], triviaQuestions[index].incorrectAnswers[1], triviaQuestions[index].incorrectAnswers[2]]);
        setCorrectAnswer(0);
     
    }


        return (
            <div>
                <Header />
                <form id="triviaGame" onSubmit={handleSubmit}>
                    <Question questionText={question} />
                    <AnswerSet answerText={answers} showCorrectAnswer={showCorrectAnswer} />
                    <IsCorrect 
                        showCorrectAnswer={showCorrectAnswer}
                        correctAnswer={answers[correctAnswer]}
                        correctness={answerSelected == answers[correctAnswer]?"correct":"incorrect"} selectedAnswer={answerSelected} selected />
                    <Count index={index} maxQuestions={numQuestions}/>
                </form>
                <GameOver/>
                
            </div>  
        )

}

export default TriviaContainer;