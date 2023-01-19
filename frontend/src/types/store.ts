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
	experiments: any[];
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
	UPDATE_EXPERIMENTS = "UPDATE_EXPERIMENTS",
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

interface updateExperimentsAction {
	type: DataActions.UPDATE_EXPERIMENTS;
	data: any;
}

interface updatePropertiesAction {
	type: DataActions.UPDATE_PROPERTIES;
	data: any;
}

export type dataActionsType = 	updateSamplesAction | 
								updateDictTableAction | 
								updatePropertiesAction |
								updateExperimentsAction ;

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


export interface VisStoreTypes {
	min_x: number,
	max_x: number,
	min_y: number,
	max_y: number,
	min_z: number,
	max_z: number,
	log_x: boolean,
	log_y: boolean,
	log_z: boolean,
}

export enum VisActions {
	SET_MIN_X = "SET_MIN_X",
	SET_MIN_Y = "SET_MIN_Y",
	SET_MIN_Z = "SET_MIN_Z",
	SET_MAX_X = "SET_MAX_X",
	SET_MAX_Y = "SET_MAX_Y",
	SET_MAX_Z = "SET_MAX_Z",
	SET_LOG_X = "SET_LOG_X",
	SET_LOG_Y = "SET_LOG_Y",
	SET_LOG_Z = "SET_LOG_Z",
}

interface SetVisSetMinXType {
	type: VisActions.SET_MIN_X;
	data: number;
}
interface SetVisSetMinYType {
	type: VisActions.SET_MIN_Y;
	data: number;
}
interface SetVisSetMinZType {
	type: VisActions.SET_MIN_Z;
	data: number;
}
interface SetVisSetMaxXType {
	type: VisActions.SET_MAX_X;
	data: number;
}
interface SetVisSetMaxYType {
	type: VisActions.SET_MAX_Y;
	data: number;
}
interface SetVisSetMaxZType {
	type: VisActions.SET_MAX_Z;
	data: number;
}
interface SetVisSetLogXType {
	type: VisActions.SET_LOG_X;
	data: boolean;
}
interface SetVisSetLogYType {
	type: VisActions.SET_LOG_Y;
	data: boolean;
}
interface SetVisSetLogZType {
	type: VisActions.SET_LOG_Z;
	data: boolean;
}


export type VisActionTypes = 	SetVisSetMinXType | 
								SetVisSetMinYType |
								SetVisSetMinZType |
								SetVisSetMaxXType |
								SetVisSetMaxYType |
								SetVisSetMaxZType |
								SetVisSetLogXType |
								SetVisSetLogYType |
								SetVisSetLogZType ;
