import axios from "axios";
import { Dispatch } from "react";
import { experimentsDBInterfaceTypes, propertysDBInterfaceTypes, samplesDBInterfaceTypes } from "../types/requests";
import { DataActions, dataActionsType } from "../types/store";

export enum APIrequests {
	ADD_SAMPLE = "ADD_SAMPLE",
	GET_SAMPLES = "GET_SAMPLES",
	DELETE_SAMPLES = "DELETE_SAMPLES",
	ADD_EXPERIMENT = "ADD_EXPERIMENT",
	GET_EXPERIMENTS = "GET_EXPERIMENTS",
	DELETE_EXPERIMENTS = "DELETE_EXPERIMENTS",
	ADD_PROPERTIES = "ADD_PROPERTIES",
	GET_PROPERTIES = "GET_PROPERTIES",
	DELETE_PROPERTIES = "DELETE_PROPERTIES",
}

export const APITable: any = {
	Samples: {url: "core/samples/", updateAction: DataActions.UPDATE_SAMPLES},
	Properties: {url: "core/properties/", updateAction: DataActions.UPDATE_PROPERTIES},
	Experiments: {url: "core/experiments/", updateAction: DataActions.UPDATE_EXPERIMENTS},
}

export function dataGetAPI (table: typeof APITable) {
	return async (dispatch: Dispatch<dataActionsType>) => {		
		try {
			const response = await axios.get(table.url);
			dispatch({type: table.updateAction, data: response.data});
		} catch (error) {
			return(error)
		}
	}
}

export async function dataPostAPI (
	table: typeof APITable,
	requestType: APIrequests, 
	data: any, 
	) {
		switch (requestType) {
			case APIrequests.ADD_SAMPLE: {
				try {
					await addSamples(table.url, data)
					return
				} catch (error) {
					return(error)
				}
			}
			case APIrequests.DELETE_SAMPLES: {
				try {
					await deleteRequest(table.url, data)
					return
				} catch (error) {
					return(error)
				}
			}
			case APIrequests.ADD_EXPERIMENT: {
				try {
					await addExperiment(table.url, data)
					return
				} catch (error) {
					return(error)
				}
			}
			case APIrequests.DELETE_EXPERIMENTS: {
				try {
					await deleteRequest(table.url, data)
					return
				} catch (error) {
					return(error)
				}
			}
			case APIrequests.ADD_PROPERTIES: {
				try {
					await addProperty(table.url, data)
					return
				} catch (error) {
					return(error)
				}
			}
			case APIrequests.DELETE_PROPERTIES: {
				try {
					await deleteRequest(table.url, data)
					return
				} catch (error) {
					return(error)
				}
			}
			default: return("ERROR")
		}
}

async function addSamples (
		url: string,
		data: samplesDBInterfaceTypes, 
	) {
	axios.post(url, {
		NAME: data.NAME,
		WELL: data.WELL,
		UWI: data.UWI,
		AREA: data.AREA,
		FIELD: data.FIELD,
		AUTOR: data.AUTOR,
	})
	.then(function (response) {
		return(response)
	  })
	.catch(function (error) {
		return(error)
	});
}

async function addExperiment (
		url: string,
		data: experimentsDBInterfaceTypes, 
	) {
	axios.post(url, {
		NAME: data.NAME,
		TYPE: data.TYPE,
		DATE: data.DATE,
		SAMPLE: data.SAMPLE,
		DESCRIPTION: data.DESCRIPTION,
	})
	.then(function (response) {
		return(response)
	  })
	.catch(function (error) {
		return(error)
	});
}

async function addProperty (
		url: string,
		data: propertysDBInterfaceTypes, 
	) {
	axios.post(url, {
		EXPERIMENT: data.EXPERIMENT,
		POROSITY: data.POROSITY,
		PERMEABILITY: data.PERMEABILITY,
		DENSITY: data.DENSITY,
	})
	.then(function (response) {
		return(response)
	  })
	.catch(function (error) {
		return(error)
	});
}


async function deleteRequest (
		url: string,
		keys: any,
	) {
	axios.delete(url, {
		data: keys
	})
	.then(function (response) {
		return(response)
	  })
	.catch(function (error) {
		return(error)
	});
}