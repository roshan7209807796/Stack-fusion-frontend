import React from 'react';
import { Route } from "react-router-dom";
// import { Switch, Route,Router } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';


const App = () => {
  return (
    <>

      <Navbar />

      <Route exact path={"/"}>
        <Home />
      </Route>

      <Route path={"/about"}>
        <About />
      </Route>

      <Route path={"/contact"}>
        <Contact />
      </Route>

      <Route path={"/Login"}>
        <Login />
      </Route>

      <Route path={"/SignUp"}>
        <SignUp />
      </Route>



    </>
  );
}

export default App;
