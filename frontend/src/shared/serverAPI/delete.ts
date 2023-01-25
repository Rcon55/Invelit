import axios from "axios"

export async function deleteRequest (url:string, keys:any) {
	try {
		axios.delete(url, {data: keys})
			.then(function (response) { return(response) })
			.catch(function (error) { return(error) })
	} catch (error) {
		return(error)
	}
}