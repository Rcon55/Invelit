import { dataActions, prepareExperiments, prepareProperties, prepareSamples } from "./actions";
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
			return {...state, samples: prepareSamples(action.payload)}

		case dataActions.UPDATE_DICT_TABLES:
			return {...state, dictionary: action.payload}

		case dataActions.UPDATE_EXPERIMENTS:
			return {...state, experiments: prepareExperiments(action.payload)}

		case dataActions.UPDATE_PROPERTIES:
			return {...state, properties: prepareProperties(action.payload)}

		case dataActions.UPDATE_GROUPS:
			return {...state, groups: action.payload}

		case dataActions.ADD_SAMPLES:
			return {...state, samples: [...state.samples, ...prepareSamples(action.payload)]}

		case dataActions.ADD_EXPERIMENTS:
			return {...state, experiments: [...state.experiments, ...prepareExperiments(action.payload)]}

		case dataActions.ADD_PROPERTIES:
			return {...state, properties: [...state.properties, ...prepareProperties(action.payload)]}

		case dataActions.ADD_GROUPS:
			return {...state, groups: [...state.groups, ...action.payload]}


		default:
			return(state)
	}
}


