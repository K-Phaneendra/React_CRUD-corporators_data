import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './containerStyles.css';
import {cancelFun2} from '../actions/allActions';
import {addCityFormFun} from '../actions/allActions';
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

class AddCityForm extends Component{
    constructor(){
        super();
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(){
        this.props.dispatch(addCityFormFun(this.addCityFormFunction(), this.addCityDetailsFunction()));
    }
    addCityFormFunction(){
        const addformData = document.forms.addForm;
        var addCityformArray;
        var addCityDataObject;
        Object.keys(this.props.tabData).map((key, index)=>{
            addCityformArray = addformData.addCityNameBox.value
            this.props.tabData[key].map((val, index)=>{
                //console.log(this.props.tabData[key][index]);
                addCityDataObject = {id: this.props.tabData[key][index].id+1, name: addformData.addCorpNameBox.value, area: addformData.addCorpAreaBox.value, age: addformData.addCorpAgeBox.value}
            });
        });
        console.log(addCityformArray);
        return addCityformArray;
    }
    addCityDetailsFunction(){
        const addformData = document.forms.addForm;
        var addCityformArray;
        var addCityDataObject;
        Object.keys(this.props.tabData).map((key, index)=>{
            addCityformArray = addformData.addCityNameBox.value
            this.props.tabData[key].map((val, index)=>{
                //console.log(this.props.tabData[key][index]);
                addCityDataObject = {id: this.props.tabData[key][index].id+1, name: addformData.addCorpNameBox.value, area: addformData.addCorpAreaBox.value, age: addformData.addCorpAgeBox.value}
            });
        });
        console.log(addCityDataObject);
        return addCityDataObject;
    }
    render(){
        if(!this.props.add_city){
            return null;
        }
        return(
            <Modal open={true} styles={customStyle}>
                <div className="editDiv">
                    <div className="headingh3div">
                        <h3 className="headingh3">Add a Person with New City Name</h3>
                    </div>
                    <form name='addForm' className='eForm'>
                        <label>City Name: </label>
                        <input type='textbox' className='editForm' name='addCityNameBox'/><br/>
                        <label>Corporator Name: </label>
                        <input type='textbox' className='editForm' name='addCorpNameBox'/><br/>
                        <label>Corporator Area: </label>
                        <input type='textbox' className='editForm' name='addCorpAreaBox'/><br/>
                        <label>Corporator Age: </label>
                        <input type='textbox' className='editForm' name='addCorpAgeBox'/><br/>
                        <input type='button' className="Edit_Del" id="upd" value='Add City' onClick={()=>this.handleAdd()}/>
                        <input type='button' className="Edit_Del" id="canc" value='Cancel' onClick={()=>this.props.dispatch(cancelFun2())}/>
                    </form>
                </div>
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return{
        add_city:state.actionReducer.add_city,
        tabData: state.actionReducer.corporators
    };
}
export default connect(mapStateToProps)(AddCityForm);