import * as React from "react";
import { Provider } from "react-redux";
import { store } from "../../entities/store/index"

export const withStore = (component: () => React.ReactNode) => () =>
	<Provider store={store}>{component()}</Provider>