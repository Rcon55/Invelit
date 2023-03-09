import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react'

export const Values = () => {
	const [checked, setChecked] = React.useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	
	return(
		<Box sx={{p:2}}>
			<FormControlLabel control={
				<Checkbox
					checked={checked}
					disabled
					onChange={handleChange}
					inputProps={{ 'aria-label': 'controlled' }}
					/>}
				label="Отображать значения"
			/>
			<br/>
		</Box>
	)
}

