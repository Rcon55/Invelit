import { Box } from '@mui/material'
import React from 'react'
import { Charts } from './charts'
import { Storage } from './storage'
import { useTypedSelector } from '../../../entities'

export const Menu = () => {
	const activePage = useTypedSelector(state => state.states.activePage)

	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				borderRight: '1px solid #D5D8DC'
			}}
		>
			{	activePage === 'storage' ?
					<Storage /> :

				activePage === 'plot' ?
					<Charts /> :

				false
			}
		</Box>
	)
} 