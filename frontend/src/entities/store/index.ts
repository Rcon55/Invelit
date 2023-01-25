import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { chartReducer } from "./chart/reduser";
import { dataReducer } from "./data/reduser";
import { statesReducer } from "./states/reduser";

export { dataActions } from "./data/actions";
export { dataActionsType } from "./data/types";

export { dictTablesType } from "./data/types"



const rootReduser = combineReducers({
	data: dataReducer,
	states: statesReducer,
	chart: chartReducer,
})

export type RootState = ReturnType<typeof rootReduser>

export const store = configureStore({
	reducer: rootReduser,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware()
			.prepend(thunk)
})

