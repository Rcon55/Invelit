import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/redusers/rootReduser";
import { AppDispatch } from "../types/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

// export const getSamples (state) => state.data.samples