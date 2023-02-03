import { getGroupPack } from "../../features/getTable/getGroupPack"
import { postGroupPack } from "../../features/postRequests/postGroupPack"


export async function sendGroupPackToServer (groupID: number) {
	const data = getGroupPack(groupID)
	postGroupPack(data)
}