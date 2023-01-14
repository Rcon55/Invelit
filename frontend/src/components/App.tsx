import { Box, GlobalStyles, Grid } from '@mui/material'
import * as React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import AppChart from './AppChart'
import AppMenuStore from './AppMenuStore'
import AppNavbar from './AppNavbar'


const App = () => {
	return (
		<div>
			<React.Fragment>
				<GlobalStyles styles={{ body: { margin: 0 } }} />
			</React.Fragment>
			<Provider store={store}>
				<Grid container spacing={0}>
					<Grid item xs="auto">
						<AppNavbar/>
					</Grid>

					<Grid item xs={4}>
						<Box
							sx={{
								width: '100%',
								height: '100vh',
								borderRight: '1px solid #D5D8DC'
								
							}}
						>
							<AppMenuStore/>
						</Box>
					</Grid>

					<Grid item xs>
						<AppChart/>
					</Grid>

				</Grid>
			</Provider>
		</div> 
	)
}

export default App