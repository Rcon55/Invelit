import { combineReducers } from "redux";
import { dataReducer } from "./dataReduser";
import { selectReducer } from "./selectReduser";
import { visReducer } from "./visReduser";


export const rootReduser = combineReducers({
	data: dataReducer,
	select: selectReducer,
	vis: visReducer,
})

export type RootState = ReturnType<typeof rootReduser>;
