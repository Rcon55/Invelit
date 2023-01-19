import { VisActions, VisActionTypes, VisStoreTypes } from "../../types/store"


const defaultState: VisStoreTypes = {
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

export function visReducer (state = defaultState, action:VisActionTypes): VisStoreTypes {
	switch (action.type) {
		case VisActions.SET_MIN_X:
			return {...state, min_x: action.data}

		case VisActions.SET_MIN_Y:
			return {...state, min_y: action.data}

		case VisActions.SET_MIN_Z:
			return {...state, min_z: action.data}

		case VisActions.SET_MAX_X:
			return {...state, max_x: action.data}

		case VisActions.SET_MAX_Y:
			return {...state, max_y: action.data}

		case VisActions.SET_MAX_Z:
			return {...state, max_z: action.data}

		case VisActions.SET_LOG_X:
			return {...state, log_x: action.data}

		case VisActions.SET_LOG_Y:
			return {...state, log_y: action.data}

		case VisActions.SET_LOG_Z:
			return {...state, log_z: action.data}

		default:
			return(state)
	}
}


