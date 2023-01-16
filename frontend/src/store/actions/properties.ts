import axios from "axios";
import { Dispatch } from "react";
import { DataActions, dataActionsType } from "../../types/store"

export const fetchProperties = () => {
	return async (dispatch: Dispatch<dataActionsType>) => {
		try {
			const response = await axios.get('core/properties');
			dispatch({type: DataActions.UPDATE_PROPERTIES, data: response.data});
		} catch (error) {
			return(error)
		}
	}
}