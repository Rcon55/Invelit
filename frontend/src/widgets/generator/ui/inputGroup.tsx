import { Box, MenuItem, TextField } from '@mui/material'
import React from 'react'

const Selector = (props: any) => {
	const options = [{value: 'SimpleFES', label: 'Простая модель ФЕС'}]
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.valSetter('model', event.target.value)}

	return(
		<TextField
			select
			label="Модель"
			defaultValue=""
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



export const GenInputGroup = (props: any) => {
	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			 <TextField
				id="standard-required"
				label="Набор данных"
				defaultValue=""
				variant="standard"
				onChange={(event) => props.valSetter('group', event.target.value)}
			/>

			<Selector valSetter={props.valSetter}/>

			 <TextField
				id="standard-number"
				label="Количество образцов"
				type="number"
				InputLabelProps={{
					shrink: true,
				}}
				variant="standard"
				onChange={(event) => props.valSetter('samples_num', event.target.value)}
			/>
		</Box>
	)
}
