import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from './components/navbar';
import About from './components/about';
import Home from './components/home';
import NoteState from './context/notes/noteState';
import Login from './components/login';
import Signup from './components/signup';




export default function App() {
  
    return (
        <div>
                  
            <Router>
            <NoteState>
                    <Navbar />
                    <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <Signup />
                        </Route>
                    </Switch>
                    </div>
                    </NoteState>
            </Router>
        
        </div>
    )
}