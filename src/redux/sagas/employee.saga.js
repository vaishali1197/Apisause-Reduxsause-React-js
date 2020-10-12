import { put, call } from "redux-saga/effects";
import { employeeActions } from "../reducers/reducdr";
import { getEmployee } from "../../common/apiSauce";

export function* getEmployees() {
	try {
		let response;

		response = yield call(getEmployee);
		
		if (!response.error) {
			yield put(employeeActions.Creators.employeeSuccess(response.data));
		} else {
			yield put(employeeActions.Creators.employeeFailure(response.error));
		}
	} catch (error) {
		yield put(employeeActions.Creators.employeeFailure(error));
	}
}
