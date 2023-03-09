import { Box } from '@mui/material'
import React from 'react'
import { DownloadGroup, UploadGroup } from './elements'

export const ExchangeTab = () => {
	return (
		<div>
			<Box sx={{height: 'calc((100vh - 84px) / 2)', overflow: 'auto'}}>
				<DownloadGroup />
			</Box>

			<Box sx={{height: 'calc((100vh - 84px) / 2)', overflow: 'auto'}}>
				<UploadGroup />
			</Box>

		</div>
	)
}
