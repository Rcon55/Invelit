
export enum DataRequests {
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
	Samples: "core/samples/",
	Properties: "core/properties/",
	Experiments: "core/experiments/",
}