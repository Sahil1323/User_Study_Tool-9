import React, {Component} from 'react';

import Question from '../question/Question';
import Answer from '../answer/Answer';

import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'The runs scored by a batsman in 5 ODIs are 31,97,112, 63, and 12. The standard deviation is',
            2: 'Find the mode of the call received on 7 consecutive day 11,13,13,17,19,23,25.',
            3: 'Find the median of the call received on 7 consecutive days 11,13, 17, 13, 23,25,19'
        },
        answers: {
            1: {
                1: '24.79',
                2: '23.79',
                3: '25.79'
            },
            2: {
                1: '11',
                2: '13',
                3: '17'
            },
            3: {
                1: '13',
                2: '23',
                3: '17'
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
                            <p>Thank you! You have succesfully completed Statistics test</p>
                            <a href = "/Table"><button className="button">Go back to Task Page</button></a>
                        </div>
                    )
                }
            </div>
        );
    }
}