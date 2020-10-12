import {combineReducers} from 'redux';
import {employeeReducer} from './reducdr'

const rootReducer= combineReducers({
    reducer: employeeReducer
   
})
export default rootReducer;