import {combineReducers} from 'redux';
import actionReducer from './reducerActions';

const allReducers = combineReducers({
    actionReducer
});
//console.log(actionReducer);
export default allReducers;