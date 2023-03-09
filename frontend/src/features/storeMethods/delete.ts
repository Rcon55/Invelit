import { Dispatch } from "redux";
import { store } from "../../entities/store";


export const deleteWithChilds = (table:string, items: number[] | string[], dispatch: Dispatch) => {
	const data = store.getState().data;
	const del = {table: items};

}