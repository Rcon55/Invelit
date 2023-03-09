import { Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'

interface ModelSelectorProps {
	modelSetter: Function
}

export const ModelSelector = ({ modelSetter }: ModelSelectorProps) => {
	const options = [{value: 'exponential', label: 'Экспоненциальная модель проницаемости'}]
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		modelSetter(event.target.value)}

	return(
		<TextField
			select
			defaultValue=""
			fullWidth
			helperText="Выберете петрофизическую модель"
			variant="standard"
			onChange={handleChange}
			sx={{marginTop: 1}}
		>
			{options.map((option) => (
				<MenuItem key={option.value} value={option.value}>
				{option.label}
				</MenuItem>
			))}
		</TextField>
	)
}

interface DatasetInputBlockProps {
	headerSetter: Function,
}

export const DatasetInputBlock = ({ headerSetter }: DatasetInputBlockProps) => {
	return (
		<Grid container spacing={1}>
			<Grid item xs={6} md={6}>
				<TextField
					id="standard-required"
					label="Набор данных"
					defaultValue=""
					fullWidth
					variant="standard"
					onChange={(event) => headerSetter("name", event.target.value)}
				/>
			</Grid>

			<Grid item xs={6} md={6}>
				<TextField
					id="standard-required"
					label="Комментарий"
					defaultValue=""
					fullWidth
					variant="standard"
					onChange={(event) => headerSetter("comment", event.target.value)}
				/>
			</Grid>
		</Grid>
	)
}
