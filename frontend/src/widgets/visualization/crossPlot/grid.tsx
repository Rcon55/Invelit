import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react'
import { useAppDispatch, useTypedSelector } from '../../../entities';
import { chartActions } from '../../../entities/store';
var _ = require('lodash');

export const Grid = () => {
	const visSetup = useTypedSelector(state => state.chart.crossPlotVis)
	const dispatch = useAppDispatch();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, parameter:string) => {
		const newSetup = _.clone(visSetup);
		newSetup.axises[parameter].main.grid = event.target.checked;
		dispatch({
			type: chartActions.UPDATE_CROSS_PLOT_VISUALIZATION, 
			payload: newSetup})
	};
	
	return(
		<Box sx={{p:2}}>
			<FormControlLabel control={
				<Checkbox
					checked={visSetup.axises.horizontal.main.grid}
					onChange={event => handleChange(event, 'horizontal')}
					inputProps={{ 'aria-label': 'controlled' }}
				/>}
				label="Линии горизонтальной сетки"
			/>
			<FormControlLabel control={
				<Checkbox
					checked={visSetup.axises.vertical.main.grid}
					onChange={event => handleChange(event, 'vertical')}
					inputProps={{ 'aria-label': 'controlled' }}
				/>}
				label="Линии вертикальной сетки"
			/>
		</Box>
	)
}
