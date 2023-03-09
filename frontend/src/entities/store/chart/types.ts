import { chartActions } from "./actions";

export interface StoreType {
	crossPlotVis: CrossPlotVisualization,
	crossPlotData?: CrossPlotData[],
}


export type CrossPlotData = {
	name: string,
	position: number,
	data: ChartDataType[],
}

export type CrossPlotVisualization = {
	axises: {
		horizontal: {
			main: {
				min: number,
				max: number,
				log: boolean,
				grid: boolean,
			},
			second?: {
				min: number,
				max: number,
				log: boolean,
				grid: boolean,
			},
		},
		vertical: {
			main: {
				min: number,
				max: number,
				log: boolean,
				grid: boolean,
			},
			second?: {
				min: number,
				max: number,
				log: boolean,
				grid: boolean,
			},
		},
	},
}

type ChartDataType = {
	x: number[],
	y: number[],
	z: number[],
}

interface updateCrossPlotVisualization {
	type: chartActions.UPDATE_CROSS_PLOT_VISUALIZATION;
	payload: CrossPlotVisualization;
}

interface updateCrossPlotData {
	type: chartActions.UPDATE_CROSS_PLOT_DATA;
	payload: CrossPlotData[];
}


export type chartActionsType = 	updateCrossPlotVisualization | 
								updateCrossPlotData;