import { all, takeEvery } from "redux-saga/effects";
import { employeeActions } from "../reducers/reducdr";
import { getEmployees } from "./employee.saga";


export default function* rootSaga() {
	yield all([yield takeEvery(employeeActions.Types.EMPLOYEE,getEmployees)]);
	
}