import { create } from 'apisauce'


const api = create({
	baseURL: "http://dummy.restapiexample.com",
	headers: {
		Accept: 'application/vnd.github.v3+json'
	},
});


export const getEmployee = async () => {
	let response = { data: null, error: "" };

	await api
		.get("/api/v1/employee/1")
		.then((apiResponse) => {
			console.log("response.data-->",response.data);
			if (apiResponse.ok) {
				response.data = apiResponse.data;
				
				
			} else {
				response.error = "Unable to fetch new videos list.";
				console.log("response.data false-->",response.data);
			}
		})
		.catch((error) => {
			response.error = error;
		});

	return response;
};
