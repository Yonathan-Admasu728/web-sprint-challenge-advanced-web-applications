import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios';
import { PrivateRoute } from './components/PrivateRoute';
import Login from './components/Login';
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
   const logout = () => {
        axios.post("http://localhost:5000/api/logout")
          .then(res => {
            console.log("Logged out!");
            localStorage.removeItem('token');
            window.location.href = "/";
        })
      };
  return (
    
     <Router>
           <div className="App">
           <header>
          Color Picker Sprint Challenge
          <ul>
               <li>
                 <Link to="/login">Login</Link>
               </li>
               <li>
                 <Link to="/protected">Bubble Page</Link>
               </li>
             </ul>
          <a data-testid="logoutButton" onClick={logout}>logout</a>
        </header> 
        
             <Switch>
               <PrivateRoute exact path="/protected" component={BubblePage} />
               <Route exact path="/" component={Login} />
               <Route component={Login} />
             </Switch>
           </div>
         </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.


