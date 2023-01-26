import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import thunk from "redux-thunk"
import { chartReducer } from "./chart/reduser"
import { dataReducer } from "./data/reduser"
import { setupReducer } from "./setup/reduser"
import { statesReducer } from "./states/reduser"

export const rootReduser = combineReducers({
	data: dataReducer,
	states: statesReducer,
	chart: chartReducer,
	setup: setupReducer,
})

export type RootState = ReturnType<typeof rootReduser>

export const store = configureStore({
	reducer: rootReduser,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware()
			.prepend(thunk)
})
