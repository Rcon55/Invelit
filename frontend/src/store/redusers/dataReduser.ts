import { dataStoreType, DataActions, dataActionsType } from "../../types/store"


const defaultState: dataStoreType = {
	samples: [],
	dictTables: {},
	properties: [],
}

export function dataReducer (state = defaultState, action:dataActionsType): dataStoreType {
	switch (action.type) {
		case DataActions.UPDATE_SAMPLES:
			return {...state, samples: action.data}

		case DataActions.UPDATE_DICT_TABLES:
			return {...state, dictTables: action.data}

		case DataActions.UPDATE_PROPERTIES:
			return {...state, properties: action.data}

		default:
			return(state)
	}
}


