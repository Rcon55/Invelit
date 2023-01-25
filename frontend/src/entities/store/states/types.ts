import { statesActions } from "./actions";


export type StoreType = {
	activePage: string,
	selectedSamples: any[],
	activeDataTable: string
}

interface setActivePageAction {
	type: statesActions.SET_ACTIVE_PAGE;
	payload: string;
}

interface setActiveDataTableAction {
	type: statesActions.SET_ACTIVE_DATA_TABLE;
	payload: string;
}

interface updateSelectedSamplesAction {
	type: statesActions.UPDATE_SELECTED_SAMPLES;
	payload: any[];
}

export type statesActionsType = 	setActiveDataTableAction | 
									updateSelectedSamplesAction |
									setActivePageAction ;
