import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { store } from '../../entities/store'
import { Charts } from './charts'
import { Menu } from './menu'
import { Sidebar } from './sidebar'

export const WorkPage = () => {
	return (
		<Grid container spacing={0}>

			<Grid item xs="auto">
				<Sidebar />
			</Grid>

			<Grid item xs={4}>
				<Menu /> 
			</Grid>

			<Grid item xs>
				<Charts />
			</Grid>

		</Grid>
	)
}
