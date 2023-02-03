import axios from "axios"

export async function deleteRequest (url:string, keys:any) {
	try {
		return await axios.delete(url, {params: {key: keys}})
	} catch (error) {
		return(error)
	}
}