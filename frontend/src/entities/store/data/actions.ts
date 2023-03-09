import { ExperimentsType, PropertiesType, SamplesType } from "./tablesTypes";
import { dataActionsType } from "./types";

export enum dataActions {
	UPDATE_SAMPLES = "UPDATE_SAMPLES",
	UPDATE_DICT_TABLES = "UPDATE_DICT_TABLES",
	UPDATE_EXPERIMENTS = "UPDATE_EXPERIMENTS",
	UPDATE_PROPERTIES = "UPDATE_PROPERTIES",
	UPDATE_GROUPS = "UPDATE_GROUPS",
	ADD_SAMPLES = "ADD_SAMPLES",
	ADD_EXPERIMENTS = "ADD_EXPERIMENTS",
	ADD_PROPERTIES = "ADD_PROPERTIES",
	ADD_GROUPS = "ADD_GROUPS",
}


type dateFormat = 'date' | 'time' | 'dateTime';
const dateFormat = (dateTime: string, format: dateFormat): string => {
	const [date, time] = dateTime.split('T');
	const formatedTime = time.slice(0, 8);
	switch (format) {
		case 'date': {
			return date
		}
		case 'time': {
			return formatedTime
		}
		case 'dateTime': {
			return `${date} ${formatedTime}`
		}
		default: {
			return dateTime
		}
	}	
}

export const prepareSamples = (data: SamplesType[]): SamplesType[] => {
	const result = [];
	for (let row of data) {
		result.push({
			sample_id: row['sample_id'],
			name: row['name'],
			area: row['area'],
			field: row['field'],
			uwi: row['uwi'],
			well: row['well'],
			create_date: dateFormat(row['create_date'], 'dateTime'),
			update_date: dateFormat(row['update_date'], 'dateTime'),
			autor: row['autor'],
			group: row['group'],
		})
	}
	return result
}

export const prepareExperiments = (data: ExperimentsType[]): ExperimentsType[] => {
	const result = [];
	for (let row of data) {
		result.push({
			experiment_id: row['experiment_id'],
			name: row['name'],
			experiment_type: row['experiment_type'],
			date: dateFormat(row['date'], 'date'),
			sample: row['sample'],
			description: row['description'],
		})
	}
	return result
}

export const prepareProperties = (data: PropertiesType[]): PropertiesType[] => {
	const result = [];
	for (let row of data) {
		result.push({
			id: row['id'],
			porosity: Number(row['porosity'].toFixed(4)),
			permeability: Number(row['permeability'].toFixed(2)),
			density: Number(row['density'].toFixed(3)),
			experiment: row['experiment'],
		})
	}
	return result
}