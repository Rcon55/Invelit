import { store } from "../../entities/store"


export const getTable = (tableName:string) => {
	switch (tableName) {
		case 'Samples': return(store.getState().data.samples)
		case 'Properties': return(store.getState().data.properties)
		case 'Experiments': return(store.getState().data.experiments)
		case 'Properties': return(store.getState().data.properties)
	}
}