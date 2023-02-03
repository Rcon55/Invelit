import { postRequest } from "../../shared"

export async function postGroupPack (packObject: any) {
	const data: any = {}
	for (let table of Object.keys(packObject)) {
		data[table] = createBodyObject(table, packObject[table])
	}
	const responce = await postRequest('core/datapack/', data)
}

const createBodyObject = (tableName: string, data: any) => {
	switch (tableName) {
		case "groups": {
			return createGroupData(data)
		}
		case "samples": {
			return createSamplesData(data)
		}
		case "experiments": {
			return createExperimentsData(data)
		}
		case "properties": {
			return createPropertiesData(data)
		}
		default: return
	}
}


const createSamplesData = (table: any) => {
	const result = []
	for (let row of table) {
		result.push({
			sample_id: row['sample_id'],
			group: row['group'],
			name: row['name'],
			area: row['area'],
			field: row['field'],
			uwi: row['uwi'],
			well: row['well'],
		})}
	return result
}

const createGroupData = (table: any) => {
	const result = []
	for (let row of table) {
		result.push({
			group_id: row['group_id'],
			name: row['name'],
			description: row['description'],
		})}
	return result
}

const createExperimentsData = (table: any) => {
	const result = []
	for (let row of table) {
		result.push({
			experiment_id: row['experiment_id'],
			name: row['name'],
			experiment_type: row['experiment_type'],
			description: row['description'],
			sample: row['sample'],
			date: row['date'],
		})}
	return result
}

const createPropertiesData = (table: any) => {
	const result = []
	for (let row of table) {
		result.push({
			id: row['id'],
			experiment: row['experiment'],
			porosity: row['porosity'],
			permeability: row['permeability'],
			density: row['density'],
		})}
	return result
}
