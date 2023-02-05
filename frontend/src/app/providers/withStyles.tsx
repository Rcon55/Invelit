import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import * as React from "react";

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				body: {
					box-sizing: border-box;
					margin: 0px;
				}
			`,
		}
	}
})

export const withStyles = (component: () => React.ReactNode) => () =>
	<ThemeProvider theme={theme}> 
		<CssBaseline />
		{component()} 
	</ThemeProvider>