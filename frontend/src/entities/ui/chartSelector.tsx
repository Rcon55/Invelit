import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'

export const ChartSelector = () => {
	const [chart, setChart] = React.useState('ФЕС');

	const handleChange = (event: SelectChangeEvent) => {
		setChart(event.target.value);
	};

	return (
		<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id="chart-selector">График</InputLabel>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={chart}
					onChange={handleChange}
					label="Age"
				>

				<MenuItem value={chart}>{chart}</MenuItem>

			</Select>
		</FormControl>
	)
}

