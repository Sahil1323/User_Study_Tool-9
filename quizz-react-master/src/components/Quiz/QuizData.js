import React, {Component} from 'react';
import Question from '../question/Question';
import Answer from '../answer/Answer';

import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'Which of the following data structure is more appropriate to represent a heap?',
            2: 'Minimum number of fields in each node of a doubly linked list is ____',
            3: 'A graph in which all vertices have equal degree is known as ____'
        },
        answers: {
            1: {
                1: 'Two-dimensional array',
                2: 'Linear Array',
                3: 'Linked list'
            },
            2: {
                1: '2',
                2: '4',
                3: '3'
            },
            3: {
                1: 'Complete graph',
                2: 'Regular graph',
                3: 'Multi graph'
            }
        },
        correctAnswers: {
            1: '2',
            2: '3',
            3: '1'
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
                            <p>Thank you! You have succesfully completed Data Structure test</p>
                            <a href = "/Table"><button className="button">Go back to Task Page</button></a>
                        </div>
                    )
                }
            </div>
        );
    }
}