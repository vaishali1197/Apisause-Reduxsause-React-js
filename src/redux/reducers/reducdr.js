import{createActions,createReducer} from 'reduxsauce'

const INITIAL_STATE = {
	data: [],
	error: "",
	isLoading : false 
};

const { Types, Creators } = createActions({
	employee: null,
	employeeSuccess: ["data"],
	employeeFailure: ["error"],
});
export const employeeActions = {
	Types,
	Creators,
};

const employee = (state) => {
	return {
		...state,
		isLoading:true,
		error: "",
	};
};

const employeeSuccess = (state, response) => {
	return {
		...state,
		data: response.data.data,
		isLoading:false,
	};
};
const employeeFailure = (state, error) => {
	return {
		...state,
		isLoading:false,
		error,
	};
};

export const employeeReducer = createReducer(INITIAL_STATE, {
	[Types.EMPLOYEE]: employee,
	[Types.EMPLOYEE_SUCCESS]: employeeSuccess,
	[Types.EMPLOYEE_FAILURE]: employeeFailure,
});