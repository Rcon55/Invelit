import { Box, Typography } from '@mui/material'
import React from 'react'
import { DownloadGroup, UploadGroup } from './elements'

export const ExchangeTab = () => {
	return (
		<div>
			<Box sx={{height: '300px'}}>
				<Typography m={1}>
					Вы можете загрузить с сервера эти наборы данных:
				</Typography>

				<DownloadGroup />
			</Box>

			<Box sx={{height: '300px'}}>
				<Typography m={1}>
					Вы можете загрузить на сервер эти наборы данных:
				</Typography>

				<UploadGroup />
			</Box>

		</div>
	)
}
