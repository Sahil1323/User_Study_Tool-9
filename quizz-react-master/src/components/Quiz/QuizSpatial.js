import React, {Component} from 'react';
import Question from '../question/Question';
import Answer from '../answer/Answer';

import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'GIS deals with which kind of data',
            2: 'By spatial data we mean data that has',
            3: 'Key components of spatial data quality include'
        },
        answers: {
            1: {
                1: 'Numeric data',
                2: 'Binary data',
                3: 'Spatial data'
            },
            2: {
                1: 'Complex values',
                2: 'Positional values',
                3: 'Graphic values'
            },
            3: {
                1: 'Positional accuracy',
                2: 'Temporal accuracy',
                3: 'All of the above'
            }
        },
        correctAnswers: {
            1: '3',
            2: '2',
            3: '3'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you! You have succesfully completed Spatial Database test</p>
                            <a href = "/Table"><button className="button">Go back to Task Page</button></a>
                        </div>
                    )
                }
            </div>
        );
    }
}