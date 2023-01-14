import { SelectActions, selectActionsType, selectStoreType } from "../../types/store"


const defaultState: selectStoreType = {
	selectedSamples: [],
	activeDataTable: 'Samples',
}

export function selectReducer (state = defaultState, action:selectActionsType): selectStoreType {
	switch (action.type) {
		case SelectActions.SET_ACTIVE_DATA_TABLE:
			return {...state, activeDataTable: action.data}

		case SelectActions.UPDATE_SELECTED_SAMPLES:
			return {...state, selectedSamples: action.data}

		default:
			return(state)
	}
}


