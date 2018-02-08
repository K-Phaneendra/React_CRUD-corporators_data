import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {addCityFun} from './actions/allActions';
import TableComponent from './containers/tableComponent';
import AddCityForm from './containers/addCityForm';
import EditCityForm from './containers/editCityForm';
import AddPersonForm from './containers/addPersonForm';
import {addCityOnlyFun} from './actions/allActions';
import AddCityOnlyForm from './containers/addCityOnlyForm';
import AddPersonOnlyForm from './containers/addPersonOnlyForm';
import {addPersonOnlyFun} from './actions/allActions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Corporators Data Grid</h1>
        </header>
        <p className="App-intro">
        </p>
        <div>
        <input type='button' className="addNewCity" id="upd" value='Add New City & Person' onClick={()=>this.props.dispatch(addCityFun())}/>
        <input type='button' className="addNewCity" id="upd" value='Add New City Only' onClick={()=>this.props.dispatch(addCityOnlyFun())}/>
        <input type='button' className="addNewCity" id="upd" value='Add New Person Only' onClick={()=>this.props.dispatch(addPersonOnlyFun())}/>
        </div>
        <div>
        <TableComponent />
        </div>
        <div>
        <AddCityForm />
        <EditCityForm />
        <AddPersonForm />
        <AddCityOnlyForm />
        <AddPersonOnlyForm />
        </div>
      </div>
    );
  }
}

export default connect()(App);
