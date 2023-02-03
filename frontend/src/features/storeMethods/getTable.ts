import { store } from "../../entities/store"


export const getTable = (tableName:string) => {
	switch (tableName) {
		case 'samples': return(store.getState().data.samples)
		case 'groups': return(store.getState().data.groups)
		case 'properties': return(store.getState().data.properties)
		case 'experiments': return(store.getState().data.experiments)
		case 'properties': return(store.getState().data.properties)
	}
}