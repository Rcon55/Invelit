import { Dispatch } from "react";
import { dataActions, dataActionsType } from "../../entities/store";
import { getRequest } from "../../shared";
import { prepareDictTables } from "./methods";


export const fetchSamples = () => {
	return async (dispatch: Dispatch<dataActionsType>) => {
		try {
			const response = await getRequest('core/samples/');
			dispatch({type: dataActions.UPDATE_SAMPLES, payload: response.data});
		} catch (error) {
			return(error)
		}
	}
}

export const fetchProperties = () => {
	return async (dispatch: Dispatch<dataActionsType>) => {
		try {
			const response = await getRequest('core/properties/');
			dispatch({type: dataActions.UPDATE_PROPERTIES, payload: response.data})
		} catch (error) {
			return(error)
		}
	}
}

export const fetchExperiments = () => {
	return async (dispatch: Dispatch<dataActionsType>) => {
		try {
			const response = await getRequest('core/experiments');
			dispatch({type: dataActions.UPDATE_EXPERIMENTS, payload: response.data})
		} catch (error) {
			return(error)
		}
	}
}

export const fetchDictTables = () => {
	return async (dispatch: Dispatch<dataActionsType>) => {
		try {
			const response = await getRequest('core/getdicttables');
			const dict = prepareDictTables(response.data);
			dispatch({type: dataActions.UPDATE_DICT_TABLES, payload: dict});
		} catch (e) {
			console.log('ERROR_DICT')
		}
	}
}