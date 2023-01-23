import { Box, GlobalStyles, Grid } from '@mui/material'
import axios from 'axios'
import * as React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import store from '../store/store'
import AppChart from './AppChart'
import AppMenuChart from './AppMenuChart'
import AppMenuStore from './AppMenuStore'
import AppNavbar from './AppNavbar'

const checkAuthStatus = (navigate: NavigateFunction) => {
	if (store.getState().auth.token === '') {
		console.log(store.getState().auth.token)
		navigate('login/')
	}
	axios.defaults.headers.common['Authorization'] = `Bearer ${store.getState().auth.token}`
}

const App = () => {
	const [menuTab, setMenuTab] = React.useState('storage')
	const navigate = useNavigate()
	React.useEffect(() => checkAuthStatus(navigate))
	
	return (
		<div>
			<React.Fragment>
				<GlobalStyles styles={{ body: { margin: 0 } }} />
			</React.Fragment>

			<Grid container spacing={0}>

				<Grid item xs="auto">
					<AppNavbar changeState={setMenuTab}/>
				</Grid>

				<Grid item xs={4}>
					<Box
						sx={{
							width: '100%',
							height: '100vh',
							borderRight: '1px solid #D5D8DC'
						}}
					>
						{	menuTab === 'storage' ?
								<AppMenuStore /> :
							menuTab === 'plot' ?
								<AppMenuChart /> :
							false
						}
					</Box>
				</Grid>

				<Grid item xs>
					<AppChart/>
				</Grid>

			</Grid>
		</div> 
	)
}

export default App