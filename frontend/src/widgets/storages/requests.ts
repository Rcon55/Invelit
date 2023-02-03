import { getRequest } from "../../shared";


export async function getPublicStorages () {
	const responce = await getRequest('core/storage/')
	return responce.data
}