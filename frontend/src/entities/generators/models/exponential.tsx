import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

interface ExponentialModelProps {
	modelSettings: Function
}

export const ExponentialModel = ({modelSettings}: ExponentialModelProps) => {
	return (
		<Grid container spacing={2} >
			<Grid item md={6}>
				<TextField 	id="numSamples" 
							type="number" 
							label="Кол-во обр." 
							onChange={(event) => modelSettings('numSamples', event.target.value)}
							variant="standard" />
			</Grid>

			<Grid sx={{display: 'flex', alignItems: 'end', justifyContent: 'center'}}>
				<Button
					variant="outlined"
					fullWidth
					
					sx={{ width: '100%', bottom: 0}}
					onClick={() => console.log(modelSettings)}
					>Создать
				</Button>
			</Grid>
			
			{/* Настройки для пористости */}
			<Grid item md={12}>
				<Typography>
					Настройки модели пористости
				</Typography>
			</Grid>
			<Grid item md={6}>
				<TextField 	id="midPor" 
							type="number" 
							label="Ср. пористость" 
							onChange={(event) => modelSettings('midPor', event.target.value)}
							variant="standard" />
			</Grid>
			<Grid item md={6}>
				<TextField 	id="devPor" 
							type="number" 
							label="Разброс знач." 
							onChange={(event) => modelSettings('devPor', event.target.value)}
							variant="standard" />
			</Grid>

			{/* Настройки для проницаемости */}
			<Grid item md={12}>
				<Typography>
					Настройки модели проницаемости
				</Typography>
			</Grid>
			<Grid item md={6}>
				<TextField 	id="minPor" 
							type="number" 
							label="Пористость T1" 
							onChange={(event) => modelSettings('minPor', event.target.value)}
							variant="standard" />
			</Grid>
			<Grid item md={6}>
				<TextField 	id="minPerm" 
							type="number" 
							label="Проницаемость T1" 
							onChange={(event) => modelSettings('minPerm', event.target.value)}
							variant="standard" />
			</Grid>
			<Grid item md={6}>
				<TextField 	id="maxPor" 
							type="number" 
							label="Пористость T2"
							onChange={(event) => modelSettings('maxPor', event.target.value)}
							variant="standard" />
			</Grid>
			<Grid item md={6}>
				<TextField 	id="maxPerm" 
							type="number" 
							label="Проницаемость T2" 
							onChange={(event) => modelSettings('maxPerm', event.target.value)}
							variant="standard" />
			</Grid>
			<Grid item md={6}>
				<TextField 	id="devPerm" 
							type="number" 
							label="Разброс знач." 
							onChange={(event) => modelSettings('devPerm', event.target.value)}
							variant="standard" />
			</Grid>
		</Grid>
	)
}
