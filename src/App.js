import React,{useState} from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Play from "./components/Play";
import Footer from "./components/Footer";
import {Switch, Route} from "react-router-dom";
import "./css/app.css"


function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  
  return (
    <div className="container">
      <Header score={score}/>
      <Switch>
        <Route exact path="/"> 
          <Play setMyChoice={setMyChoice}/>
        </Route>
        <Route exact path="/game">
          <Game myChoice={myChoice} score={score} setScore={setScore}/>
        </Route>
      </Switch>
      <Footer/>
    </div> 
  );
}

export default App;
