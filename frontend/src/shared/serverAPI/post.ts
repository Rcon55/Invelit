import axios from "axios"


export async function postRequest (url:string, data:any) {
	try {
		axios.post(url, data)
			.then(function (response) { return(response) })
			.catch(function (error) { return(error) })
	} catch (error) {
		return(error)
	}
}