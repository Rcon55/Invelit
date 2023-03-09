import { StoreType, statesActionsType } from './types'
import { statesActions } from './actions'

export const defaultState: StoreType = {
	activePage: 'storage',
	activeDataTable: 'Samples',
	selectedData: {
		samples: [], 
		groups: [], 
		experiments: [],
		properties: [],
	}
}

export function statesReducer (state = defaultState, action:statesActionsType): StoreType {
	switch (action.type) {
		case statesActions.SET_ACTIVE_PAGE:
			return {...state, activePage: action.payload}

		case statesActions.SET_ACTIVE_DATA_TABLE:
			return {...state, activeDataTable: action.payload}

		case statesActions.UPDATE_SELECTED_DATA:
			return {...state, selectedData: action.payload}

		default:
			return(state)
	}
}