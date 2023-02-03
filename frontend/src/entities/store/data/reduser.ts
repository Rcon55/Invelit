import { dataActions } from "./actions";
import { StoreType, dataActionsType } from './types'

const defaultState: StoreType = {
	dictionary: {},
	samples: [],
	experiments: [],
	properties: [],
	groups: [],
}

export function dataReducer (state = defaultState, action:dataActionsType): StoreType {
	switch (action.type) {
		case dataActions.UPDATE_SAMPLES:
			return {...state, samples: action.payload}

		case dataActions.UPDATE_DICT_TABLES:
			return {...state, dictionary: action.payload}

		case dataActions.UPDATE_EXPERIMENTS:
			return {...state, experiments: action.payload}

		case dataActions.UPDATE_PROPERTIES:
			return {...state, properties: action.payload}

		case dataActions.UPDATE_GROUPS:
			return {...state, groups: action.payload}

		case dataActions.ADD_SAMPLES:
			return {...state, samples: [...state.samples, ...action.payload]}

		case dataActions.ADD_EXPERIMENTS:
			return {...state, experiments: [...state.experiments, ...action.payload]}

		case dataActions.ADD_PROPERTIES:
			return {...state, properties: [...state.properties, ...action.payload]}

		case dataActions.ADD_GROUPS:
			return {...state, groups: [...state.groups, ...action.payload]}


		default:
			return(state)
	}
}


