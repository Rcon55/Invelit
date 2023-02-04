import { dictionaryType } from "./dictionaryType";
import { dataActions } from "./actions";
import { ExperimentsType, GroupType, PropertiesType, SamplesType } from "./tablesTypes";


export interface StoreType {
	samples: SamplesType[];
	dictionary: dictionaryType;
	experiments: ExperimentsType[];
	properties: PropertiesType[];
	groups:GroupType[];
}


interface updateSamplesAction {
	type: dataActions.UPDATE_SAMPLES;
	payload: SamplesType[];
}

interface updatePropertiesAction {
	type: dataActions.UPDATE_PROPERTIES;
	payload: PropertiesType[];
}

interface updateDictTableAction {
	type: dataActions.UPDATE_DICT_TABLES;
	payload: dictionaryType;
}

interface updateExperimentsAction {
	type: dataActions.UPDATE_EXPERIMENTS;
	payload: ExperimentsType[];
}

interface updateGroupsAction {
	type: dataActions.UPDATE_GROUPS;
	payload: GroupType[];
}

interface addSamplesAction {
	type: dataActions.ADD_SAMPLES;
	payload: SamplesType[];
}

interface addExperimentsAction {
	type: dataActions.ADD_EXPERIMENTS;
	payload: ExperimentsType[];
}

interface addPropertiesAction {
	type: dataActions.ADD_PROPERTIES;
	payload: PropertiesType[];
}
 
interface addGroupsAction {
	type: dataActions.ADD_GROUPS;
	payload: GroupType[];
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