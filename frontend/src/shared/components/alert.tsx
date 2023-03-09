import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { useState } from 'react';


interface ShowAlertProps {
	severity: 'success' | 'info' | 'warning' | 'error',
	message: string,
}

export const ShowAlert = ({severity, message}: ShowAlertProps) => {
	const [open, setOpen] = useState(false)
	

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			open={open}
			autoHideDuration={5000}
			onClose={handleClose}
		>
			<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	)
}