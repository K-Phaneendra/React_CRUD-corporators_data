import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './containerStyles.css';
import {addPersonFormFun} from '../actions/allActions';
import {addPersonOnlyCancelFun} from '../actions/allActions';
import {addPersonOnlyDataFun} from '../actions/allActions';
// import Modal from 'react-modal';
import Modal from 'react-responsive-modal';

const customStyle = {
    modal: {
        width: '20%',
        margin: '1em auto',
        top: '5%',
        boxShadow: '0 5px 10px rgba(0, 0, 0, .3)'
    },
    closeIcon: {
        display: 'none'
    }
};

class AddPersonOnlyForm extends Component{
    constructor(){
        super();
        this.handleAddPerson = this.handleAddPerson.bind(this);
    }
    handleAddPerson(){
        this.props.dispatch(addPersonOnlyDataFun(this.addPersonCityName(), this.addPersonOnlyDataFunction()));
    }
    addPersonCityName(){
        const addPersonformData = document.forms.addPersonForm;
        var selectedCity = addPersonformData.addPersonCityBox.value;
        return selectedCity;
    }
    addPersonOnlyDataFunction(){
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
    cityNamesFun(data){
        var cityArray = Object.keys(data);
        return cityArray.map((cityName)=>{
            return(<option value={cityName}>{cityName}</option>);
        });
    }
    render(){
        console.log(this.props.tabData)
        console.log(this.props.add_person_only)
        if(!this.props.add_person_only){
            return null;
        }
        return(
            <Modal open={true} styles={customStyle}>
                <div className="editDiv">
                    <div className="headingh3div">
                        <h3 className="headingh3">You can Add a Person Here</h3>
                    </div>
                    <form name='addPersonForm' className='eForm'>
                    <label>Select City: </label>
                    <select name='addPersonCityBox' className='editForm'>
                        <option>Select City</option>
                        {this.cityNamesFun(this.props.tabData)}
                    </select>
                        <label>Corporator Name: </label>
                        <input type='textbox' className='editForm' name='addPersonNameBox'/><br/>
                        <label>Corporator Area: </label>
                        <input type='textbox' className='editForm' name='addPersonAreaBox'/><br/>
                        <label>Corporator Age: </label>
                        <input type='textbox' className='editForm' name='addPersonAgeBox'/><br/>
                        <input type='button' className="Edit_Del" id="upd" value='Submit' onClick={()=>this.handleAddPerson()}/>
                        <input type='button' className="Edit_Del" id="canc" value='Cancel' onClick={()=>this.props.dispatch(addPersonOnlyCancelFun())}/>
                    </form>
                </div>
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return{
        add_person_only:state.actionReducer.add_person_only,
        tabData: state.actionReducer.corporators,
    };
}
export default connect(mapStateToProps)(AddPersonOnlyForm);