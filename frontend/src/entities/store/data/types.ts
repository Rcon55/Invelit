import { dictionaryType } from "./dictionaryType";
import { dataActions } from "./actions";


export interface StoreType {
	samples: any[];
	dictionary: dictionaryType;
	experiments: any[];
	properties: any[];
	groups:any[];
}


interface updateSamplesAction {
	type: dataActions.UPDATE_SAMPLES;
	payload: any[];
}

interface updatePropertiesAction {
	type: dataActions.UPDATE_PROPERTIES;
	payload: any[];
}

interface updateDictTableAction {
	type: dataActions.UPDATE_DICT_TABLES;
	payload: dictionaryType;
}

interface updateExperimentsAction {
	type: dataActions.UPDATE_EXPERIMENTS;
	payload: any[];
}

interface updateGroupsAction {
	type: dataActions.UPDATE_GROUPS;
	payload: any[];
}

interface addSamplesAction {
	type: dataActions.ADD_SAMPLES;
	payload: any[];
}

interface addExperimentsAction {
	type: dataActions.ADD_EXPERIMENTS;
	payload: any[];
}

interface addPropertiesAction {
	type: dataActions.ADD_PROPERTIES;
	payload: any[];
}
 
interface addGroupsAction {
	type: dataActions.ADD_GROUPS;
	payload: any[];
}

export type dataActionsType = 	updateSamplesAction | 
								updateDictTableAction | 
								updatePropertiesAction |
								updateGroupsAction |
								updateExperimentsAction |
								addSamplesAction | 
								addPropertiesAction |
								addGroupsAction |
								addExperimentsAction ;