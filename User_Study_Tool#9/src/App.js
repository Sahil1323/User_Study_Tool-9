import React, { useState } from 'react';
import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom';
import './App.css';

//pages

import Table from "./components/task/table";
import QuizML from "./components/Quiz/QuizML.js";
import QuizJS from "./components/Quiz/QuizJS.js";
import QuizISE from "./components/Quiz/QuizISE.js";
import QuizBA from "./components/Quiz/QuizBA.js";
import QuizStats from "./components/Quiz/QuizStats.js";
import QuizSpatial from "./components/Quiz/QuizSpatial.js";
import QuizR from "./components/Quiz/QuizR.js";
import QuizReact from "./components/Quiz/QuizReact.js";
import QuizLM from "./components/Quiz/QuizLM";
import QuizData from "./components/Quiz/QuizData.js";


function App() {
  const navigation = useNavigate();
  const [showQuiz, setShowQuiz] = useState([true, true, true, true, true, true, true, true, true, true])


  const hideQuiz = (index) => {
    console.log('inside hidqQujiz')
    let newshowQuiz = [...showQuiz]
    newshowQuiz[index] = false
    setShowQuiz(newshowQuiz)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Table showQuiz={showQuiz} hideQuiz={hideQuiz} navigation={navigation} />} />
        <Route path="/QuizISE" element={<QuizISE navigation={navigation} />} />
        <Route path="/QuizBA" element={<QuizBA />} />
        <Route path="/table" element={<Table showQuiz={showQuiz} hideQuiz={hideQuiz} navigation={navigation}/>} />
        <Route path="/QuizML" element={<QuizML navigation={navigation} />} />
        <Route path="/QuizJS" element={<QuizJS />} />
        <Route path="/QuizStats" element={<QuizStats />} />
        <Route path="/QuizSpatial" element={<QuizSpatial />} />
        <Route path="/QuizR" element={<QuizR />} />
        <Route path="/QuizReact" element={<QuizReact />} />
        <Route path="/QuizLM" element={<QuizLM />} />
        <Route path="/QuizData" element={<QuizData />} />

      </Routes>
    </div>
  );
}

export default App;


