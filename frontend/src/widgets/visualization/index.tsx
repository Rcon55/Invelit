import { Button, FormControlLabel, Switch, TextField } from '@mui/material'
import React from 'react'
import { useAppDispatch } from '../../entities'
import { chartActions, store } from '../../entities/store'

const sxComponents = {ml:1, mb:1, width:'30%', height: '50px'}

export const VisMenu = () => {
	const dispatch = useAppDispatch()
	const visSetup = store.getState().chart

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
		dispatch({type: chartActions.SET_MIN_X, payload: minX})
		dispatch({type: chartActions.SET_MAX_X, payload: maxX})
		dispatch({type: chartActions.SET_MIN_Y, payload: minY})
		dispatch({type: chartActions.SET_MAX_Y, payload: maxY})
		dispatch({type: chartActions.SET_LOG_X, payload: logX})
		dispatch({type: chartActions.SET_LOG_Y, payload: logY})
	}

	return (
		<div>
			<TextField
				label="Мин. X" 
				variant="standard" 
				sx={sxComponents} 
				onChange={(event) => minX = inputChange(event)}
				defaultValue={store.getState().chart.min_x}
			/>
			<TextField 	
				label="Макс. X" 
				variant="standard" 
				sx={sxComponents} 
				onChange={(event) => maxX = inputChange(event)}
				defaultValue={store.getState().chart.max_x} 
			/>
			<FormControlLabel
				control={
					<Switch
						defaultChecked={store.getState().chart.log_x}
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
				defaultValue={store.getState().chart.min_y}
			/>
			<TextField 
				label="Макс. Y" 
				variant="standard" 
				sx={sxComponents} 
				onChange={(event) => maxY = inputChange(event)}
				defaultValue={store.getState().chart.max_y}
			/>
			<FormControlLabel 
				control={
					<Switch 
						defaultChecked={store.getState().chart.log_x}
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
