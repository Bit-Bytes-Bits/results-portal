import React, { useEffect, useState } from 'react';
import './App.css';
import {  Route } from "react-router-loading";
import Switch from 'rc-switch';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    fetch('http://localhost:3000/results')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      
    }) 
    },[])

    return (
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login setIsLoggedIn={isLoggedIn} />
          </Route>
        </Switch>
        
      </div>
    );
}

export default App;
