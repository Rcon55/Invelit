import { postRequest } from "../../shared";
import { ExperimentsRequestType, PropertiesRequestType, SamplesRequestType } from "./types";

export async function addSamples (
		url: string,
		data: SamplesRequestType, 
	) {
	const payload = {
		NAME: data.NAME,
		WELL: data.WELL,
		UWI: data.UWI,
		AREA: data.AREA,
		FIELD: data.FIELD,
		AUTOR: data.AUTOR,
	}
	postRequest(url, payload)
}

export async function addExperiment (
	url: string,
	data: ExperimentsRequestType, 
	) {
	const payload = {
		NAME: data.NAME,
		TYPE: data.TYPE,
		DATE: data.DATE,
		SAMPLE: data.SAMPLE,
		DESCRIPTION: data.DESCRIPTION,
	}
	postRequest(url, payload)
}

export async function addProperty (
	url: string,
	data: PropertiesRequestType, 
	) {
		const payload = {
		EXPERIMENT: data.EXPERIMENT,
		POROSITY: data.POROSITY,
		PERMEABILITY: data.PERMEABILITY,
		DENSITY: data.DENSITY,
	}
	postRequest(url, payload)
}

export async function deleteRequest (
	url: string,
	keys: any,
	) {
	deleteRequest(url, keys)
}