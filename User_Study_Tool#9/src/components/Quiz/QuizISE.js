import React, {Component} from 'react';
//import {useNavigate} from "react-router-dom"
import Question from '../question/Question';
import Answer from '../answer/Answer';
import './QuizMain.css';
//import React from "react"

export default class Quiz extends Component {
    constructor(props){
        super(props);
        this.handleBack=this.handleBack.bind(this)
    }

    handleBack(){
        this.props.history.push('/task/task4');
    }

    // initiating the local state
    state = {
        quiestions: {
            1: 'Servers are computers that provide resources to other computers connected to a',
            2: 'A program that is used to view websites is called a',
            3: 'Which one of this is a programming language'
        },
        answers: {
            1: {
                1: 'Client',
                2: 'Mainframe',
                3: 'Network'
            },
            2: {
                1: 'Spreadsheet',
                2: 'Browser',
                3: 'Web viewer'
            },
            3: {
                1: 'Javascript',
                2: 'TCP/IP',
                3: 'MAC Address'
            }
        },
        correctAnswers: {
            1: '3',
            2: '2',
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
                            <p>Thank you! You have succesfully completed Internet Solution Engineering test</p>
                            <a href = "/Table"><button className="button">Go back to Task Page</button></a>
                            
                        </div>
                    )
                }
            </div>
        );
    }
}