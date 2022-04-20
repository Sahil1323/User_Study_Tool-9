import React from "react"

import './table.css'
import { Navigate } from 'react-router'
export default class Table extends React.Component {
   constructor(props) {
      super(props)

         this.state = {
         students: [
            { Task: 1, Description: 'In this task the questions are related to machine learning.', Duration: '~5 min', Operation: <button onClick={()=> {this.props.hideQuiz(0);this.props.navigation('/QuizML')}} className="button">START TASK 1 TEST</button>},
            { Task: 2, Description: 'In this task the questions are related to Internet Solution Engineering.', Duration: '~5 min', Operation: <button  onClick={()=> {this.props.hideQuiz(1);this.props.navigation('/QuizISE')}} className="button">START TASK 2 TEST</button>},
            { Task: 3, Description: 'In this task the questions are related to Bayesian Analysis.', Duration: '~5 min', Operation: <a href="/QuizBA"><button className="button">START TASK 3 TEST</button></a> },
            { Task: 4, Description: 'In this task the questions are related to JavaScript.', Duration: '~5 min', Operation: <a href="/QuizJS"><button  className="button">START TASK 4 TEST</button></a> },
            { Task: 5, Description: 'In this task the questions are related to Statistics.', Duration: '~5 min', Operation: <a href="/QuizStats"><button  className="button">START TASK 5 TEST</button></a> },
            { Task: 6, Description: 'In this task the questions are related to Spatial Database.', Duration: '~5 min', Operation: <a href="/QuizSpatial"><button className="button">START TASK 6 TEST</button></a> },
            { Task: 7, Description: 'In this task the questions are related to Data Analytics using R.', Duration: '~5 min', Operation: <a href="/QuizR"><button className="button">START TASK 7 TEST</button></a> },
            { Task: 8, Description: 'In this task the questions are related to React.', Duration: '~5 min', Operation: <a href="/QuizReact"><button className="button">START TASK 8 TEST</button></a> },
            { Task: 9, Description: 'In this task the questions are related to Linear Models.', Duration: '~5 min', Operation: <a href="/QuizLM"><button className="button">START TASK 9 TEST</button></a> },
            { Task: 10, Description: 'In this task the questions are related to Data Structure.', Duration: '~5 min', Operation: <a href="/QuizData"><button className="button">START TASK 10 TEST</button></a> }
         ],
         showQuiz:[true,true,true,true,true,true,true,true,true,true]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }


   renderTableData() {
      return this.state.students.map((student, index) => {
         const { Task, Description, Duration, Operation } = student //destructuring
         return (
            this.props.showQuiz[index] && <tr key={Task}>
               <td>{Task}</td>
               <td>{Description}</td>
               <td>{Duration}</td>
               <td>{Operation} </td>
            </tr>
         )
      })
   }

   confirmAction() {
      let confirmAction = window.confirm("Are you sure to execute this action?");
      if (confirmAction) {
        alert("Action successfully executed");
      } else {
        alert("Action canceled");
      }
    }

   render() {

      return (
         <React.Fragment>
            <div className="title">
               <h1 Task='title'>Welcome to Online Assesment</h1>
            </div>
            <div>
               <h2>Instruction about assesment:</h2>
               <p>1. So there are total 10 tasks that needs to be performed, each task contains 3 questions of 1 mark each.</p>
               <p>2. No cell phones or other secondary devices in the room or test area.</p>
               <p>3. All questions are compulsory.</p>
               <p>4. You are allowed to submit only once, make sure that you have correctly attempted all the questions before submission.</p>
               <p>5. Use Chrome or Firefox where possible.</p>
               
               <table Task='students'>
                  <tbody>
                     <tr>{this.renderTableHeader()}</tr>
                     {this.renderTableData()}
                  </tbody>
               </table>
               
            </div>
            

         </React.Fragment>
      )
   }
}

