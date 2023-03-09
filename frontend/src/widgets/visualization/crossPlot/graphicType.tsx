import { Checkbox, FormControlLabel } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

const Points = () => {
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return(
		<React.Fragment>
			<FormControlLabel control={
				<Checkbox
					checked={checked}
					onChange={handleChange}
					inputProps={{ 'aria-label': 'controlled' }}
					/>}
				label="Точки"
			/>
			<br/>
			<input type="color"/>
			<br/>
		</React.Fragment>
	)
}

const Lines = () => {
	const [checked, setChecked] = React.useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	
	return(
		<React.Fragment>
			<FormControlLabel control={
				<Checkbox
					checked={checked}
					disabled
					onChange={handleChange}
					inputProps={{ 'aria-label': 'controlled' }}
					/>}
				label="Линии"
			/>
			<br/>
		</React.Fragment>
	)
}

const Density = () => {
	const [checked, setChecked] = React.useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	
	return(
		<React.Fragment>
			<FormControlLabel control={
				<Checkbox
					checked={checked}
					disabled
					onChange={handleChange}
					inputProps={{ 'aria-label': 'controlled' }}
					/>}
				label="Плотность данных"
			/>
			<br/>
		</React.Fragment>
	)
}

export const GraphicType = () => {
	return (
		<Box sx={{p:2}}>
			<Points/>
			<Lines/>
			<Density/>
		</Box>
	)
}

