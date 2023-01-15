import axios from "axios";
import { Dispatch } from "react";
import { DataActions, dataActionsType } from "../../types/store"

export const fetchExperiments = () => {
	return async (dispatch: Dispatch<dataActionsType>) => {
		try {
			const response = await axios.get('core/experiments');
			dispatch({type: DataActions.UPDATE_EXPERIMENTS, data: response.data});
		} catch (error) {
			return(error)
		}
	}
}