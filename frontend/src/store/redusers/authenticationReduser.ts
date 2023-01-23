interface authStoreTypes {
	token: string
}

export enum AuthActions {
	SET_TOKEN = 'SET_TOKEN',
}

interface AuthActionType {
	type: AuthActions,
	payload: string,
}

const defaultState: authStoreTypes = {
	token: '',
}

export function authenticationReduser (	state = defaultState, 
										action:AuthActionType
										): authStoreTypes {
	switch (action.type) {
		case AuthActions.SET_TOKEN:
			return {...state, token: action.payload}

		default:
			return(state)
	}
}


