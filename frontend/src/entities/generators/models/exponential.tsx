import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { DatasetHeaderType, ExponentialModelProperties } from '../types'
import { sendExpModRequest } from '../requests/exponential'

interface ExponentialModelProps {
	header: DatasetHeaderType,
}

export const ExponentialModel = ({ header }: ExponentialModelProps) => {
	const modelSettings: ExponentialModelProperties = {
		numberOfSamples: null,
		medianPorosity: null,
		deviationPorosity: null,
		t1Porosity: null,
		t2Porosity: null,
		t1Permeability: null,
		t2Permeability: null,
		deviationPermeability: null
	}

	async function submitModelSettings () {
		console.log(header)
		await sendExpModRequest(header, modelSettings)
	}

	return (
		<Grid container spacing={2} >
			<Grid item md={6}>
				<TextField 	id="numberOfSamples" 
							type="number" 
							label="Кол-во обр." 
							onChange={(event) => modelSettings['numberOfSamples'] = Number(event.target.value)}
							variant="standard" />
			</Grid>

			<Grid sx={{display: 'flex', alignItems: 'end', justifyContent: 'center'}}>
				<Button
					variant="outlined"
					fullWidth
					onClick={submitModelSettings}
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
				<TextField 	id="medianPorosity" 
							type="number" 
							label="Ср. пористость" 
							onChange={(event) => modelSettings['medianPorosity'] = Number(event.target.value)}
							variant="standard" />
			</Grid>
			<Grid item md={6}>
				<TextField 	id="deviationPorosity" 
							type="number" 
							label="Разброс знач." 
							onChange={(event) => modelSettings['deviationPorosity'] = Number(event.target.value)}
							variant="standard" />
			</Grid>

			{/* Настройки для проницаемости */}
			<Grid item md={12}>
				<Typography>
					Настройки модели проницаемости
				</Typography>
			</Grid>
			<Grid item md={6}>
				<TextField 	id="t1Porosity" 
							type="number" 
							label="Пористость T1" 
							onChange={(event) => modelSettings['t1Porosity'] = Number(event.target.value)}
							variant="standard" />
			</Grid>
			<Grid item md={6}>
				<TextField 	id="t1Permeability" 
							type="number" 
							label="Проницаемость T1" 
							onChange={(event) => modelSettings['t1Permeability'] = Number(event.target.value)}
							variant="standard" />
			</Grid>
			<Grid item md={6}>
				<TextField 	id="t2Porosity" 
							type="number" 
							label="Пористость T2"
							onChange={(event) => modelSettings['t2Porosity'] = Number(event.target.value)}
							variant="standard" />
			</Grid>
			<Grid item md={6}>
				<TextField 	id="t2Permeability" 
							type="number" 
							label="Проницаемость T2" 
							onChange={(event) => modelSettings['t2Permeability'] = Number(event.target.value)}
							variant="standard" />
			</Grid>
			<Grid item md={6}>
				<TextField 	id="deviationPermeability" 
							type="number" 
							label="Разброс знач." 
							onChange={(event) => modelSettings['deviationPermeability'] = Number(event.target.value)}
							variant="standard" />
			</Grid>
		</Grid>
	)
}
