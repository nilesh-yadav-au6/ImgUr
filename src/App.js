import React from 'react';
import './App.css';
import  { Route , Switch } from "react-router-dom"
import Login from "./components/Login"
import SingUp from "./components/SignUp"
import Home from "./components/Home"
import Dashbaord from "./components/Dashboard"
import PrivateUpload from "./components/PrivateUpload"

function App() {
  return (
    <div className="App">
         <Switch>
        <Route exact path="/private" component={PrivateUpload} />
        <Route exact path="/dashboard" component={Dashbaord} />
        <Route exact path="/register" component={SingUp} /> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
