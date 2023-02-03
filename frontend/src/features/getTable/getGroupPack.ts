import { store } from "../../entities/store"

export const getGroupPack = (groupID: number) => {
	const dataStore = store.getState().data
 
	const groups = []
	for (let row of dataStore.groups) {
		row['group_id'] === groupID ? groups.push(row) : {}
	}
	
	const samples = []
	const samplesList = []
	for (let row of dataStore.samples) {
		row['group'] === groupID ? samples.push(row) : {}
		row['group'] === groupID ? samplesList.push(row['sample_id']) : {}
	}
	
	const experiments = []
	const experimentsList = []
	for (let row of dataStore.experiments) {
		samplesList.includes(row['sample']) ? experiments.push(row) : {}
		samplesList.includes(row['sample']) ? experimentsList.push(row['experiment_id']) : {}
	}

	const properties = []
	for (let row of dataStore.properties) {
		experimentsList.includes(row['experiment']) ? properties.push(row) : {}
	}

	return({groups, samples, experiments, properties})
}