import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './containerStyles.css';
//import CityDetails from './cityDetailsTable';
//import CityNames from './cityNamesTable';
//import './jquery-3.2.1';
//import $ from "jquery";
import {editFun} from '../actions/allActions';
import {addNewPersonFun} from '../actions/allActions';
import {delFun} from '../actions/allActions';
import AddPersonOnlyForm from './addPersonOnlyForm';

class TableComponent extends Component{
    constructor(){
    super();
    this.tabFun = this.tabFun.bind(this);
    }
    handleEdit(key, values){
        this.props.dispatch(editFun(key, values));
    }
    handleDelete(key, values){
        this.props.dispatch(delFun(key, values));
    }
	tabFun(data){
        console.log(data);
		var keyArray = Object.keys(data);
        console.log(keyArray)
             return keyArray.map((key, index)=>{
                console.log(key)
        		return(
        			<table className='t1'>
        			<tbody>
        			<tr><td colSpan="5">{key}</td></tr>
        				{data[key].map((values, i)=>{
                    return <tr><td>{i+1}</td><td>{data[key][i].name}</td><td>{data[key][i].area}</td><td>{data[key][i].age}</td><td><input type='button' value='Edit' className="Edit_Del" id="editBut" onClick={()=>this.handleEdit(key, values)} /><input type='button' className="Edit_Del" id="deleteBut" value='Delete' onClick={()=>this.handleDelete(key, values)}/></td></tr>
                })}
        			</tbody>
        			</table>
        		)
             });
	}
	render(){
        console.log(this.props.tabData)
        let add_person_only_div = <div></div>
        if(this.props.add_person_only !== false){
            add_person_only_div = <AddPersonOnlyForm />
        }
		return(
			<div>
            {this.tabFun(this.props.tabData)}
            {add_person_only_div}
			</div>
			)
	}
}
function mapStateToProps(state){
    return{
        tabData: state.actionReducer.corporators,
        add_person_only: state.actionReducer.add_person_only
    }
}

export default connect(mapStateToProps)(TableComponent);