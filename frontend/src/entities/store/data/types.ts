import { dataActions } from "./actions";

export interface StoreType {
	samples: any[];
	dictTables: dictTablesType;
	experiments: any[];
	properties: any[];
}

export type dictTablesType = {
	[key: string]: {
		name: string,
		columns: {
			[key: string]: {
				name: string,
				editable: boolean,
			}
		}
	}
}


interface updateSamplesAction {
	type: dataActions.UPDATE_SAMPLES;
	payload: any;
}

interface updatePropertiesAction {
	type: dataActions.UPDATE_PROPERTIES;
	payload: any;
}

interface updateDictTableAction {
	type: dataActions.UPDATE_DICT_TABLES;
	payload: dictTablesType;
}

interface updateExperimentsAction {
	type: dataActions.UPDATE_EXPERIMENTS;
	payload: any;
}

interface updatePropertiesAction {
	type: dataActions.UPDATE_PROPERTIES;
	payload: any;
}

export type dataActionsType = 	updateSamplesAction | 
								updateDictTableAction | 
								updatePropertiesAction |
								updateExperimentsAction ;