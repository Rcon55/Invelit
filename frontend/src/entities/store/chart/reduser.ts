import { chartActions } from "./actions"
import { chartActionsType, CrossPlotVisualization, StoreType } from "./types"

const crossPlotVisDefault: CrossPlotVisualization = {
	axises: {
		horizontal: {
			main: {
				min: 0,
				max: 1,
				log: false,
				grid: true,
			},
		},
		vertical: {
			main:{
				min: 0,
				max: 1,
				log: false,
				grid: true,
			}
		}
	}
}

const defaultState: StoreType = {
	crossPlotVis: crossPlotVisDefault,
}

export function chartReducer (state = defaultState, action: chartActionsType): StoreType {
	switch (action.type) {
		case chartActions.UPDATE_CROSS_PLOT_VISUALIZATION:
			return {...state, crossPlotVis: action.payload}
		
		case chartActions.UPDATE_CROSS_PLOT_DATA:
			return {...state, crossPlotData: action.payload}

		default:
			return(state)
	}
}


