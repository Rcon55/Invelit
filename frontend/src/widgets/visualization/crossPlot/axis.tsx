import { Box, Button, FormControlLabel, Switch, TextField, Typography } from '@mui/material'
import React from 'react'
import { useAppDispatch, useTypedSelector } from '../../../entities'
import { chartActions } from '../../../entities/store'
var _ = require('lodash');

const sxComponents = {ml:1, mb:1, width:'30%', height: '50px'}

export const Axis = () => {
	const dispatch = useAppDispatch()
	const visSetup = useTypedSelector(state => state.chart.crossPlotVis)

	const inputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		return Number(event.target.value)
	};

	const switchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		return Boolean(event.target.checked)
	}
	

	let timeout:any;
	function saveWithTimeout(axis: string, property: string, value: number | boolean) {
		const setup = _.clone(visSetup);
		setup.axises[axis].main[property] = value;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			dispatch({
				type: chartActions.UPDATE_CROSS_PLOT_VISUALIZATION, 
				payload: setup})
		  }, 200);
	}
	return (
		<Box sx={{p:2}}>
			<Button
				variant='outlined'
				sx={{m:2}}
			>
				Определить масштаб
			</Button>
			<br/>
			<TextField
				label="Мин. X" 
				variant="standard" 
				sx={sxComponents} 
				onChange={(event) => saveWithTimeout('horizontal', 'min', inputChange(event))}
				defaultValue={visSetup.axises.horizontal.main.min}
			/>
			<TextField 	
				label="Макс. X" 
				variant="standard" 
				sx={sxComponents} 
				onChange={(event) => saveWithTimeout('horizontal', 'max', inputChange(event))}
				defaultValue={visSetup.axises.horizontal.main.max} 
			/>
			<FormControlLabel
				control={
					<Switch
						defaultChecked={visSetup.axises.horizontal.main.log}
						onChange={(event) => saveWithTimeout('horizontal', 'log', switchChange(event))}
					/>
				} 
				label="log X"
				sx={sxComponents} 
			/>

			<TextField 
				label="Мин. Y" 
				variant="standard" 
				sx={sxComponents} 
				onChange={(event) => saveWithTimeout('vertical', 'min', inputChange(event))}
				defaultValue={visSetup.axises.vertical.main.min}
			/>
			<TextField 
				label="Макс. Y" 
				variant="standard" 
				sx={sxComponents} 
				onChange={(event) => saveWithTimeout('vertical', 'max', inputChange(event))}
				defaultValue={visSetup.axises.horizontal.main.max}
			/>
			<FormControlLabel 
				control={
					<Switch 
						defaultChecked={visSetup.axises.vertical.main.log}
						onChange={(event) => saveWithTimeout('vertical', 'log', switchChange(event))}
					/>
				} 
				label="log Y"
				sx={sxComponents} 
			/>
		</Box>
	)
}
