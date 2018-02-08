import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './containerStyles.css';
import {editCancelFun} from '../actions/allActions';
import {updateEditForm} from '../actions/allActions';
import Modal from 'react-modal';

class EditCityForm extends Component{
    constructor(){
        super();
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleUpdate(){
        this.props.dispatch(updateEditForm(this.selectedCityNameFunction(), this.editCityDetailsFunction(), this.props.edit_cityName, this.props.edit_details.id));
    }
    selectedCityNameFunction(){
        const editformData = document.forms.editForm;
        var changedCityName;
        changedCityName = editformData.editCorpSelectBox.value
        if(changedCityName === this.props.edit_cityName){
            return this.props.edit_cityName
        }
        else{
            return changedCityName;
        }
    }
    editCityDetailsFunction(){
        const editformData = document.forms.editForm;
        var editCityDataObject;
        if(this.selectedCityNameFunction() === this.props.edit_cityName){
            editCityDataObject = {id: this.props.edit_details.id, name: editformData.editCorpNameBox.value, area: editformData.editCorpAreaBox.value, age: editformData.editCorpAgeBox.value}
        }
        else{
            //var cityArray = Object.keys(this.props.tabData);
            this.props.tabData[this.selectedCityNameFunction()].map((cityData)=>{
                //console.log(cityData)
                editCityDataObject = {id: cityData.id+1, name: editformData.editCorpNameBox.value, area: editformData.editCorpAreaBox.value, age: editformData.editCorpAgeBox.value}
            })     
        }
        console.log(editCityDataObject);
        return editCityDataObject;
    }
    cityList(data){
        var cityArray = Object.keys(data);
        return cityArray.map((cityName)=>{
            return(<option value={cityName}>{cityName}</option>);
        });
    }
    render(){
        console.log(this.props.edit_details)
        if(!this.props.edit_details){
            return null;
        }
        return(
            <Modal isOpen={true}>
            <div className="editDiv">
            <h3>You can Edit Here</h3>
            <form name='editForm' className='eForm'>
            <label>Select City: </label>
            <select className="editForm" name="editCorpSelectBox" defaultValue={this.props.edit_cityName}>
            <option defaultValue={this.props.edit_cityName}>{this.props.edit_cityName}</option>
            {this.cityList(this.props.tabData)}
            </select>
                <label>Corporator Name: </label>
                <input type='textbox' className='editForm' name='editCorpNameBox' defaultValue = {this.props.edit_details.name}/><br/>
                <label>Corporator Area: </label>
                <input type='textbox' className='editForm' name='editCorpAreaBox' defaultValue = {this.props.edit_details.area}/><br/>
                <label>Corporator Age: </label>
                <input type='textbox' className='editForm' name='editCorpAgeBox' defaultValue = {this.props.edit_details.age}/><br/>
                <input type='button' className="Edit_Del" id="upd" value='Update' onClick={()=>this.handleUpdate()}/>
                <input type='button' className="Edit_Del" id="canc" value='Cancel' onClick={()=>this.props.dispatch(editCancelFun())}/>
            </form>
            </div>
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return{
        edit_details:state.actionReducer.edit_details,
        tabData: state.actionReducer.corporators,
        edit_cityName: state.actionReducer.edit_cityName
    };
}
export default connect(mapStateToProps)(EditCityForm);