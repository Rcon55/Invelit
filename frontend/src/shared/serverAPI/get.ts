import axios from "axios";

export async function getRequest (url: string, config?: any) {
	try {
		return await axios.get(url, config || false)
	} catch(error) {
		return(error)
	}
}