import { GridSelectionModel } from "@mui/x-data-grid";
import { statesActions } from "./actions";


export type StoreType = {
	activePage: string,
	activeDataTable: string,
	selectedData: SelectedDataType,
}

export type SelectedDataType = {
	samples?: GridSelectionModel | number[],
	experiments?: GridSelectionModel | number[],
	properties?: GridSelectionModel | number[],
	groups?: GridSelectionModel | number[],
	[table: string]: GridSelectionModel | number[],
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
	type: statesActions.UPDATE_SELECTED_DATA;
	payload: SelectedDataType;
}

export type statesActionsType = 	setActiveDataTableAction | 
									updateSelectedSamplesAction |
									setActivePageAction ;
