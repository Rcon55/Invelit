import { getValue } from "./getValue"
import { findChilds } from "./selections"

type propertyTree = {
	[propertyID: number | string]: {
		name: string,
		value: string,
	},
}

type experimentTree = {
	[experimentID: number]: {
		name: string,
		items: propertyTree,
	}
}

type sampleTree = {
	[sampleID: number]: {
		name: string,
		items: {
			experiments: {
				name: string,
				items: experimentTree,
			}
		}
	}
}

export type dataTreeType = {
	[dataset: string]: {
		name: string,
		items: {
			data: {
				name: string,
				items: {
					samples: {
						name: string,
						items: sampleTree,
					}
				}
			}
		}
	}
}

export const createFullDataTree = (datasetID:number) => {
	const tree: dataTreeType = {};
	let level = 8;
	//Образцы
	const samples: sampleTree = {};
	for (let sample of findChilds('groups', datasetID)['samples']) {
		//Эксперименты
		const experiments: experimentTree = {};
		for (let experiment of findChilds('samples', sample)['experiments']) {
			//Параметры
			const properties: propertyTree = {};
			for (let property of findChilds('experiments', experiment)['properties']) {
				//Заполняем отдельные параметры из объекта свойств
				const row = getValue('properties', 'id', property)
				for (let parameter of Object.keys(row)){
					properties[parameter] = {
						name: String(parameter),
						value: typeof row === 'object' ? String(row[parameter]) : String(row)}}
			}
			experiments[experiment] = {
				name: String(getValue('experiments', 'experiment_id', experiment, 'name')), 
				items: properties};
		}
		samples[sample] = {
			name: String(getValue('samples', 'sample_id', sample, 'name')), 
			items: {
				experiments: {name: 'Эксперименты',  items: experiments}
		}};
	}
	tree[datasetID] = {
		name: String(getValue('groups', 'group_id', datasetID, 'name')), 
		items: {
			data: {
				name: 'Данные', 
				items: {
					samples: {name: 'Образцы', items: samples}}
				}}}
	return tree;
}