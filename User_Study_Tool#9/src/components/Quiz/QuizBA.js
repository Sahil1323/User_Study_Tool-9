import React, {Component} from 'react';
import Question from '../question/Question';
import Answer from '../answer/Answer';
import './QuizMain.css';
import { Button, Modal } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'An urn contains five balls. Two balls are drawn and found to be white. The probability that all the balls are white is',
            2: 'The conditional probability P(Ei |A) is called a ……… probability of the hypothesis Ei.',
            3: 'Way of getting information from measuring observation whise outcomes occurence is on chance is called'
        },
        answers: {
            1: {
                1: '1/2',
                2: '1',
                3: '3/10'
            },
            2: {
                1: 'Beyes',
                2: 'Posterior',
                3: 'Hypothesis'
            },
            3: {
                1: 'Beta Experiment',
                2: 'Alpha Experiment',
                3: 'Random Experiment'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '3'
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

    showQuiz = () => {
        this.setState({ show: true })
    }

  

    render() {
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
                                <a href="/Table"><button className="button">Go back to Task Page</button></a>
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