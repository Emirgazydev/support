import './App.scss';
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Money from "./components/Money";
import Why from "./components/Why";
import Start from "./components/Start";
import Gradient from "./components/Gradient";
import Prof from "./components/Prof";
function App() {
  return (
    <div className="App">
       <Header/>
        <Hero/>
        <Money/>
        <Why/>
        <Start/>
        <Gradient/>
        <Prof/>
    </div>
  );
}

export default App;
