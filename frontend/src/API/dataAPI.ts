import axios from "axios";
import { Dispatch } from "react";
import { DataActions, dataActionsType } from "../types/store";

export enum APIrequests {
	ADD_SAMPLE = "ADD_SAMPLE",
	GET_SAMPLES = "GET_SAMPLES",
	DELETE_SAMPLES = "DELETE_SAMPLES",
	ADD_PROPERTIES = "ADD_PROPERTIES",
	GET_PROPERTIES = "GET_PROPERTIES",
	DELETE_PROPERTIES = "DELETE_PROPERTIES",
}

export const APITable: any = {
	Samples: {url: "core/samples/", updateAction: DataActions.UPDATE_SAMPLES},
	Properties: {url: "core/properties/", updateAction: DataActions.UPDATE_SAMPLES},
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
					await deleteSamples(table.url, data)
					return
				} catch (error) {
					return(error)
				}
			}
			default: return("ERROR")
		}
}

interface samplesDBInterfaceTypes {
	SAMPLE_ID?: string,
	NAME: string,
	WELL: string,
	UWI: string,
	AREA: string,
	FIELD: string,
	AUTOR: string,
	CREATE_DATE?: string,
	UPDATE_DATE?: string,
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


async function deleteSamples (
		url: string,
		data: any[], 
	) {
	axios.delete(url, {
		data: {SAMPLE_ID: data}
	})
	.then(function (response) {
		return(response)
	  })
	.catch(function (error) {
		return(error)
	});
}