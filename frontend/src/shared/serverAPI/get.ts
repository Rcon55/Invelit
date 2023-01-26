import axios from "axios";

export async function getRequest (url: string) {
	try {
		return await axios.get(url)
	} catch(error) {
		return(error)
	}
}