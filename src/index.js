import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Main from './main';
import Header from './header';
import Dashboard from './dashboard';
import LeftMenu from './leftMenu';
import PatientTable from './patientTable';
import MedicalsTable from './medicalsTable';
import MedicenToPatient from './medicenToPatient';
import CreateOp from './createOp';
import Admin from './admin';
import Login from './login';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
     isAccess: false
    };
  }

  getData = (data) =>{
         this.setState({isAccess: data}); 
    }
  render() {
    const { isAccess }= this.state;
    return (
        <div>
        { (window.location.pathname === '/') ?
              null :
              <Header /> 
        }
        <div class="container-fluid">
          <div class="row">
           { (window.location.pathname === '/') ? null :
            <div class="col-sm-2" style={{ height: '92vh', backgroundColor: '#f3f4f8' }}><LeftMenu /></div>
           }
            <div class="col-sm-10">
                <Router>
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/dashboard' component={Dashboard} />
                  <Route path='/patient' component={PatientTable} />
                  <Route path='/admin' component={Admin} />
                  <Route path='/createOp' component={CreateOp} />
                  <Route path='/medicenToPatient' component={MedicenToPatient} />
                  <Route path='/medical' component={MedicalsTable} />
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

render(<App />, document.getElementById('root'));
