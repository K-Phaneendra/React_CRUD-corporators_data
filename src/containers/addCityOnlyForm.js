import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './containerStyles.css';
import {cancelFun2} from '../actions/allActions';
import {addCityFormFun} from '../actions/allActions';
import {cancelAddCityOnlyFun} from '../actions/allActions';
import {addCityOnlyDataFun} from '../actions/allActions';
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
            <Modal open={true} styles={customStyle}>
            <div className="editDiv">
            <div className="headingh3div">
            <h3 className="headingh3">Type a City Name</h3>
            </div>
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