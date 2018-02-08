import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './containerStyles.css';
import {cancelFun2} from '../actions/allActions';
import {addCityFormFun} from '../actions/allActions';
import {cancelAddCityOnlyFun} from '../actions/allActions';
import {addCityOnlyDataFun} from '../actions/allActions';
import Modal from 'react-modal';

class AddCityOnlyForm extends Component{
    constructor(){
        super();
        this.handleAddCityOnly = this.handleAddCityOnly.bind(this);
    }
    handleAddCityOnly(){
        this.props.dispatch(addCityOnlyDataFun(this.addCityFormFunction()));
    }
    addCityFormFunction(){
        const addCityOnlyForm = document.forms.addCityOnlyForm;
        var addCityOnlyName = addCityOnlyForm.addCityOnlyNameBox.value;
        return addCityOnlyName;
    }
    render(){
        //console.log(this.props.add_city_only)
        if(!this.props.add_city_only){
            return null;
        }
        return(
            <Modal isOpen={true}>
            <div className="editDiv">
            <h3>Type a City Name</h3>
            <form name='addCityOnlyForm' className='eForm'>
                <label>City Name: </label>
                <input type='textbox' className='editForm' name='addCityOnlyNameBox'/><br/>
                <input type='button' className="Edit_Del" id="upd" value='Add City' onClick={()=>this.handleAddCityOnly()}/>
                <input type='button' className="Edit_Del" id="canc" value='Cancel' onClick={()=>this.props.dispatch(cancelAddCityOnlyFun())}/>
            </form>
        </div>
        </Modal>
        )
    }
}
function mapStateToProps(state){
    return{
        add_city_only:state.actionReducer.add_city_only,
        tabData: state.actionReducer.corporators
    };
}
export default connect(mapStateToProps)(AddCityOnlyForm);