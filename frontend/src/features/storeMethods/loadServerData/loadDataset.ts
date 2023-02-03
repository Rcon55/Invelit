import { Dispatch } from "redux";
import { getRequest } from "../../../shared";
import { dataActions } from "../../../entities/store";


export const loadDataset = (group:string) => {
	return async (dispatch:Dispatch) => {
		try {
			const responce = await getRequest('core/datapack', {params:{group_id: group}})
			
			const groups = responce.data['groups']
			dispatch({type: dataActions.ADD_GROUPS, payload: groups})
			
			const samples = responce.data['samples']
			dispatch({type: dataActions.ADD_SAMPLES, payload: samples})
			
			const experiments = responce.data['experiments']
			dispatch({type: dataActions.ADD_EXPERIMENTS, payload: experiments})
			
			const properties = responce.data['properties']
			dispatch({type: dataActions.ADD_PROPERTIES, payload: properties})
		} catch (error) { 
			console.log(error)
		}
	}
}