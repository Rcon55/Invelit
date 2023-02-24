import { SnackbarProvider } from "notistack";
import React from "react";


export const withAlerts = (component: () => React.ReactNode) => () =>
	<SnackbarProvider maxSnack={3}>{component()}</SnackbarProvider>