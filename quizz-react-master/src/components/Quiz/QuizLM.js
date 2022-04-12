import React, {Component} from 'react';
import Question from '../question/Question';
import Answer from '../answer/Answer';

import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'The process of training a predictive model with well defined target values is known as',
            2: 'The following is true of the Knn algorithm',
            3: ' The trade off between over fitting and under fitting training data is called'
        },
        answers: {
            1: {
                1: 'Unsupervised learning',
                2: 'Model estimation',
                3: 'Supervised learning'
            },
            2: {
                1: 'It has slow training phase',
                2: 'It has a fast classification phase',
                3: '*Makes no assumptions about the data distribution'
            },
            3: {
                1: 'The bias-variance tradeoff',
                2: 'The residual sum of squares',
                3: 'The null deviance'
            }
        },
        correctAnswers: {
            1: '3',
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
                            <p>Thank you! You have succesfully completed Linear Model test</p>
                            <a href = "/Table"><button className="button">Go back to Task Page</button></a>
                        </div>
                    )
                }
            </div>
        );
    }
}