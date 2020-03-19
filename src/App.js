import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import Navbar from './components/layout/Navbar'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import CreateProject from './components/projects/CreateProject'
import ProjectDetails from './components/projects/ProjectDetails'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route exact path="/signin" component={SignIn} /> 
    <Route exact path='/signup' component={SignUp} />
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/create" component={CreateProject} />
    <Route exact path="/project/:id" component={ProjectDetails} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
