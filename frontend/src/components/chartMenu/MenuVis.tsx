import { ContactlessOutlined } from '@mui/icons-material'
import { Button, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material'
import * as React from 'react'
import { useAppDispatch } from '../../hooks/typedHooks'
import store from '../../store/store'
import { VisActions } from '../../types/store'

const sxComponents = {ml:1, mb:1, width:'30%', height: '50px'}

const MenuVis = () => {
	const dispatch = useAppDispatch()
	const visSetup = store.getState().vis

	let minX = visSetup.min_x
	let minY = visSetup.min_y
	let maxX = visSetup.max_x
	let maxY = visSetup.max_y
	let logX = visSetup.log_x
	let logY = visSetup.log_y

	const inputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		return Number(event.target.value)
	};

	const switchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		return Boolean(event.target.checked)
	}
	

	const saveSettings = () => {
		dispatch({type: VisActions.SET_MIN_X, data: minX})
		dispatch({type: VisActions.SET_MAX_X, data: maxX})
		dispatch({type: VisActions.SET_MIN_Y, data: minY})
		dispatch({type: VisActions.SET_MAX_Y, data: maxY})
		dispatch({type: VisActions.SET_LOG_X, data: logX})
		dispatch({type: VisActions.SET_LOG_Y, data: logY})
	}

	return (
		<div>
			<TextField 
				label="Мин. X" 
				variant="standard" 
				sx={sxComponents} 
				onChange={(event) => minX = inputChange(event)}
				defaultValue={store.getState().vis.min_x}
			/>
			<TextField 	
				label="Макс. X" 
				variant="standard" 
				sx={sxComponents} 
				onChange={(event) => maxX = inputChange(event)}
				defaultValue={store.getState().vis.max_x} 
			/>
			<FormControlLabel 
				control={
					<Switch 
						defaultChecked={store.getState().vis.log_x}
						onChange={(event) => logX = switchChange(event)}
					/>
				} 
				label="log X"
				sx={sxComponents} 
			/>

			<TextField 
				label="Мин. Y" 
				variant="standard" 
				sx={sxComponents} 
				onChange={(event) => minY = inputChange(event)}
				defaultValue={store.getState().vis.min_y}
			/>
			<TextField 
				label="Макс. Y" 
				variant="standard" 
				sx={sxComponents} 
				onChange={(event) => maxY = inputChange(event)}
				defaultValue={store.getState().vis.max_y}
			/>
			<FormControlLabel 
				control={
					<Switch 
						defaultChecked={store.getState().vis.log_x}
						onChange={(event) => logY = switchChange(event)}
					/>
				} 
				label="log Y"
				sx={sxComponents} 
			/>
			<Button 
				variant="outlined"
				sx={{ m: 1,  width: '100px'}}
				onClick={saveSettings}
				>Обновить
			</Button>
		</div>
	)
}

export default MenuVis