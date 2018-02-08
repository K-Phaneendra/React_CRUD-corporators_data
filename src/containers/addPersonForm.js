import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './containerStyles.css';
import {addPersonFormFun} from '../actions/allActions';
import {cancelAddPersonFun} from '../actions/allActions';

class AddPersonForm extends Component{
    constructor(){
        super();
        this.handleAddPerson = this.handleAddPerson.bind(this);
    }
    handleAddPerson(){
        this.props.dispatch(addPersonFormFun(this.props.add_person, this.addPersonFormDataFunction()));
    }
    addPersonFormDataFunction(){
        const addPersonformData = document.forms.addPersonForm;
        var addPersonDataObject;
        var keyArray = Object.keys(this.props.tabData);
        keyArray.map((cityName, index)=>{
            this.props.tabData[cityName].map((cityData, index)=>{
                addPersonDataObject = {id: this.props.tabData[cityName][index].id+1, name: addPersonformData.addPersonNameBox.value, area: addPersonformData.addPersonAreaBox.value, age: addPersonformData.addPersonAgeBox.value}
            });
        });
        console.log(addPersonDataObject);
        return addPersonDataObject;
    }
    render(){
        console.log(this.props.tabData)
        console.log(this.props.add_person)
        if(!this.props.add_person){
            return null;
        }
        return(
            <div>
            <form name='addPersonForm' className='editForm'>
                <label>Corporator Name: </label>
                <input type='textbox' name='addPersonNameBox'/><br/>
                <label>Corporator Area: </label>
                <input type='textbox' name='addPersonAreaBox'/><br/>
                <label>Corporator Age: </label>
                <input type='textbox' name='addPersonAgeBox'/><br/>
                <input type='button' value='Submit' onClick={()=>this.handleAddPerson()}/>
                <input type='button' value='Cancel' onClick={()=>this.props.dispatch(cancelAddPersonFun())}/>
            </form>
        </div>
        )
    }
}
function mapStateToProps(state){
    return{
        add_person:state.actionReducer.add_person,
        tabData: state.actionReducer.corporators,
    };
}
export default connect(mapStateToProps)(AddPersonForm);