import { chartActions } from "./actions"
import { chartActionsType, StoreType } from "./types"


const defaultState: StoreType = {
	min_x: 0,
	max_x: 1,
	min_y: 0,
	max_y: 1,
	min_z: 0,
	max_z: 1,
	log_x: false,
	log_y: false,
	log_z: false,
}

export function chartReducer (state = defaultState, action: chartActionsType): StoreType {
	switch (action.type) {
		case chartActions.SET_MIN_X:
			return {...state, min_x: action.payload}

		case chartActions.SET_MIN_Y:
			return {...state, min_y: action.payload}

		case chartActions.SET_MIN_Z:
			return {...state, min_z: action.payload}

		case chartActions.SET_MAX_X:
			return {...state, max_x: action.payload}

		case chartActions.SET_MAX_Y:
			return {...state, max_y: action.payload}

		case chartActions.SET_MAX_Z:
			return {...state, max_z: action.payload}

		case chartActions.SET_LOG_X:
			return {...state, log_x: action.payload}

		case chartActions.SET_LOG_Y:
			return {...state, log_y: action.payload}

		case chartActions.SET_LOG_Z:
			return {...state, log_z: action.payload}

		default:
			return(state)
	}
}


