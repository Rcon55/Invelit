import axios from "axios";
import { Dispatch } from "react";
import { DataActions, dictTablesType, dataActionsType } from "../../types/store"

export const fetchSamples = () => {
	return async (dispatch: Dispatch<dataActionsType>) => {
		try {
			const response = await axios.get('core/samples');
			// console.log(response)
			dispatch({type: DataActions.UPDATE_SAMPLES, data: response.data});
		} catch (error) {
			return(error)
		}
	}
}