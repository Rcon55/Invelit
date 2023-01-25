import { chartActions } from "./actions";

export interface StoreType {
	min_x: number,
	max_x: number,
	min_y: number,
	max_y: number,
	min_z: number,
	max_z: number,
	log_x: boolean,
	log_y: boolean,
	log_z: boolean,
}


interface SetMinXType {
	type: chartActions.SET_MIN_X;
	payload: number;
}
interface SetMinYType {
	type: chartActions.SET_MIN_Y;
	payload: number;
}
interface SetMinZType {
	type: chartActions.SET_MIN_Z;
	payload: number;
}
interface SetMaxXType {
	type: chartActions.SET_MAX_X;
	payload: number;
}
interface SetMaxYType {
	type: chartActions.SET_MAX_Y;
	payload: number;
}
interface SetMaxZType {
	type: chartActions.SET_MAX_Z;
	payload: number;
}
interface SetLogXType {
	type: chartActions.SET_LOG_X;
	payload: boolean;
}
interface SetLogYType {
	type: chartActions.SET_LOG_Y;
	payload: boolean;
}
interface SetLogZType {
	type: chartActions.SET_LOG_Z;
	payload: boolean;
}


export type chartActionsType = 	SetMinXType | 
								SetMinYType |
								SetMinZType |
								SetMaxXType |
								SetMaxYType |
								SetMaxZType |
								SetLogXType |
								SetLogYType |
								SetLogZType ;