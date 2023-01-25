import React from "react"
import { FormControl, InputLabel, ListSubheader, MenuItem, Select } from "@mui/material"

export const ModelsSelector =() => {
	return(
		<FormControl sx={{ mt: 2, ml: 2, width: '70%'}}>
			<InputLabel htmlFor="models-select">Выбор моделей</InputLabel>
			<Select defaultValue={0} id="models-select" label="Выбор моделей">
				<MenuItem value={0}>
					<em>Только образцы</em>
				</MenuItem>
				<ListSubheader>Комплексные</ListSubheader>
					<MenuItem value={10}>Пористость-Проницаемость</MenuItem>
				<ListSubheader>ФЕС</ListSubheader>
					<MenuItem value={20}>Пористость-Проницаемость</MenuItem>
			</Select>
		</FormControl>
	)
}