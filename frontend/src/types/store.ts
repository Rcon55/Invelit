import store from "../store/store";

//Store types
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

export interface dataStoreType {
	samples: any[];
	dictTables: dictTablesType;
	properties: any[];
}

export type AppDispatch = typeof store.dispatch;


export type selectStoreType = {
	selectedSamples: any[],
	activeDataTable: string
}

//dataReduser actions types
export enum DataActions {
	UPDATE_SAMPLES = "UPDATE_SAMPLES",
	UPDATE_DICT_TABLES = "UPDATE_DICT_TABLES",
	UPDATE_PROPERTIES = "UPDATE_PROPERTIES",
}

interface updateSamplesAction {
	type: DataActions.UPDATE_SAMPLES;
	data: any;
}

interface updatePropertiesAction {
	type: DataActions.UPDATE_PROPERTIES;
	data: any;
}

interface updateDictTableAction {
	type: DataActions.UPDATE_DICT_TABLES;
	data: dictTablesType;
}

export type dataActionsType = 	updateSamplesAction | 
								updateDictTableAction | 
								updatePropertiesAction;

//selectReduser actions types
export enum SelectActions {
	SET_ACTIVE_DATA_TABLE = "SET_ACTIVE_DATA_TABLE",
	UPDATE_SELECTED_SAMPLES = "UPDATE_SELECTED_SAMPLES",
}

interface setActiveDataTableAction {
	type: SelectActions.SET_ACTIVE_DATA_TABLE;
	data: string;
}

interface updateSelectedSamplesAction {
	type: SelectActions.UPDATE_SELECTED_SAMPLES;
	data: any[];
}

export type selectActionsType = setActiveDataTableAction | updateSelectedSamplesAction;
