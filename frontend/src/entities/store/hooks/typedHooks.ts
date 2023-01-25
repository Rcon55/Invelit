import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { store } from "..";
import { RootState } from '../index'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch