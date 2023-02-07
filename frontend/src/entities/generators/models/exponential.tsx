import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

interface ExponentialModelProps {
	numSamples: React.MutableRefObject<number>,
	midPor: React.MutableRefObject<number>,
	devPor: React.MutableRefObject<number>,
}

export const ExponentialModel = () => {
	return (
		<Grid container spacing={2}>
			<Grid item md={6}>
				<Typography></Typography>
			</Grid>
			<Grid item md={6}>
				<TextField 	id="numSamples" 
							type="number" 
							label="Количество образцов" 
							variant="standard" />
			</Grid>
			
			{/* Настройки для пористости */}
			<Grid item md={6}>
				<TextField 	id="midPor" 
							type="number" 
							label="Средняя пористость" 
							variant="standard" />
			</Grid>
			<Grid item md={6}>
				<TextField 	id="devPor" 
							type="number" 
							label="Отклонение значений" 
							variant="standard" />
			</Grid>
			{/* Настройки для проницаемости */}
		</Grid>
	)
}
