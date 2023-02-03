import { getRequest } from "../../shared"


export async function getServerGroupsList (changeState:any) {
	const responce = await getRequest('core/groups')
	const groups = []
	for (let item of responce.data) {
		groups.push({name: item['name'], id: item['group_id'], desc: item['description']})
	}
	changeState(groups)
}

