import { setupActions } from './actions'
import { StoreType, setupActionType } from './types'

const defaultState: StoreType = {
	token: '',
	user: '',
	tokenExp: '',
}

export function setupReducer (state = defaultState, action:setupActionType): StoreType {
	switch (action.type) {
		case setupActions.SET_TOKEN:
			return {...state, token: action.payload}

		case setupActions.SET_USER:
			return {...state, user: action.payload}

		case setupActions.SET_TOKEN_EXP:
			return {...state, tokenExp: action.payload}

		default:
			return(state)
	}
}