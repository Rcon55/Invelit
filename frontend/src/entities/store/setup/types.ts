import { setupActions } from "./actions";


export type StoreType = {
	token: string,
	user: string,
	tokenExp: string,
}

interface setTokenAction {
	type: setupActions.SET_TOKEN;
	payload: string;
}

interface setUserAction {
	type: setupActions.SET_USER;
	payload: string;
}

interface setTokenExpAction {
	type: setupActions.SET_TOKEN_EXP;
	payload: string;
}

export type setupActionType = 	setTokenAction		| 
								setUserAction		|
								setTokenExpAction	;
