import { Dispatch } from "react";
import { combineReducers } from "redux";
import { dataActionsType, dataStoreType } from "../../types/store";
import store from "../store";
import { dataReducer } from "./dataReduser";
import { selectReducer } from "./selectReduser";


export const rootReduser = combineReducers({
	data: dataReducer,
	select: selectReducer,
})

export type RootState = ReturnType<typeof rootReduser>;
