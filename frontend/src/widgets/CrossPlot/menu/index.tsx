import { IconButton } from '@mui/material'
import React from 'react'

import CachedIcon from '@mui/icons-material/Cached';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import ColorLensIcon from '@mui/icons-material/ColorLens';

export const Menu = () => {
	return (
		<div>
			<IconButton aria-label="update" size="medium">
				<CachedIcon fontSize="inherit" color='primary'/>
			</IconButton>

			<IconButton aria-label="grid" size="medium">
				<Grid4x4Icon fontSize="inherit" color='primary'/>
			</IconButton>

			<IconButton aria-label="delete" size="medium">
				<ColorLensIcon fontSize="inherit" color='primary'/>
			</IconButton>
		</div>
	)
}
