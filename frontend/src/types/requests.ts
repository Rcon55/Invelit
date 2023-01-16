
export interface samplesDBInterfaceTypes {
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

export interface experimentsDBInterfaceTypes {
	NAME: string,
	TYPE: string,
	DATE: string,
	SAMPLE: string,
	DESCRIPTION?: string,
}

export interface propertysDBInterfaceTypes {
	EXPERIMENT: string,
	POROSITY: string,
	PERMEABILITY: string,
	DENSITY: string,
}