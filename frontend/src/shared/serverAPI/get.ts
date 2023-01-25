import axios from "axios";

export async function getRequest (url: string) {
	try {
		axios.get(url)
			.then(function (response) { return(response) })
			.catch(function (error) { return(error) })
	} catch(error) {
		return(error)
	}
}