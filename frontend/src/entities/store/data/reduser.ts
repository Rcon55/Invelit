import { dataActions } from "./actions";
import { StoreType, dataActionsType } from './types'

const defaultState: StoreType = {
	samples: [],
	dictTables: {},
	experiments: [],
	properties: [],
}

export function dataReducer (state = defaultState, action:dataActionsType): StoreType {
	switch (action.type) {
		case dataActions.UPDATE_SAMPLES:
			return {...state, samples: action.payload}

		case dataActions.UPDATE_DICT_TABLES:
			return {...state, dictTables: action.payload}

		case dataActions.UPDATE_EXPERIMENTS:
			return {...state, experiments: action.payload}

		case dataActions.UPDATE_PROPERTIES:
			return {...state, properties: action.payload}

		default:
			return(state)
	}
}


