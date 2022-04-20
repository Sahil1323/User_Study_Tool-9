import React, { Component } from 'react';
import Question from '../question/Question';
import Answer from '../answer/Answer';
import { Button, Modal } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'Which of the following is an example of a deterministic algorithm?',
            2: 'High entropy means that the partitions in classification are',
            3: 'Which of the following is NOT supervised learning?'
        },
        answers: {
            1: {
                1: 'PCA',
                2: 'K-Means',
                3: 'None of the above'
            },
            2: {
                1: 'pure',
                2: 'useless',
                3: 'not pure'
            },
            3: {
                1: 'Decision Tree',
                2: 'PCA',
                3: 'Linear Regression'
            }
        },
        correctAnswers: {
            1: '1',
            2: '3',
            3: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
        show: false
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
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

    showQuiz = () => {
        this.setState({ show: true })
    }

  

    render() {
        console.log(this.props)
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score, show } = this.state;
        return (
            show ? (
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
                                <p>Thank you! You have succesfully completed Machine Learning test</p>
                               <button onClick={()=> this.props.navigation('/')} className="button">Go back to Task Page</button>
                            </div>
                        )
                    }
                </div>) : (<Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.showQuiz()}>Proceed</Button>
                        <a href="/Table"><Button variant="secondary">Close</Button></a>
                    </Modal.Footer>
                </Modal.Dialog>)
        );
    }
}