import { Box, Button, Grid, MenuItem, TextField } from '@mui/material'
import React, { Ref } from 'react'
import { sendGeneratorModel } from '../requests'

export const ModelSelector = (props: any) => {
	const options = [{value: 'exponential', label: 'Экспоненциальная модель проницаемости'}]
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.valSetter('model', event.target.value)}

	return(
		<TextField
			select
			label="Модель"
			defaultValue=""
			fullWidth
			helperText="Выберете петрофизическую модель"
			variant="standard"
			onChange={handleChange}
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
	nameRef: React.MutableRefObject<string>,
	commentRef: React.MutableRefObject<string>,
}

export const DatasetInputBlock = ({ nameRef, commentRef}: DatasetInputBlockProps) => {
	return (
		<Grid container spacing={1}>
			<Grid item xs={6} md={6}>
				<TextField
					id="standard-required"
					label="Набор данных"
					defaultValue=""
					fullWidth
					variant="standard"
					onChange={(event) => nameRef.current = event.target.value}
				/>
			</Grid>

			<Grid item xs={6} md={6}>
				<TextField
					id="standard-required"
					label="Комментарий"
					defaultValue=""
					fullWidth
					variant="standard"
					onChange={(event) => commentRef.current = event.target.value}
				/>
			</Grid>
		</Grid>
	)
}
