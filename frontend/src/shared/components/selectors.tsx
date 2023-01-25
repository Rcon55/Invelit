import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import * as React from "react";
import {v4 as uuid} from 'uuid';

interface TableSelectorProps {
	list: {[key: string]: {
		name: string
		}};
	onSelect?: (state: string) => void;
	defaultValue?: string;
}


export const TableSelector = ({list, onSelect, defaultValue}: TableSelectorProps) => {
	const [table, setTable] = React.useState(defaultValue || '');

	const handleChange = (event: SelectChangeEvent) => {
		setTable(event.target.value as string);
		onSelect(Object.keys(list).find(key => list[key].name === event.target.value));
	};

	return (
		<FormControl
			sx={{ m: 1, width: '300px' }}
		>
			<InputLabel id="select-table-input">Таблица</InputLabel>
			<Select
				labelId="select-table-label"
				id="select-table"
				value={table}
				label="Таблица"
				onChange={handleChange}
			>
				{Object.keys(list).map(item => 
					<MenuItem
						value={list[item].name}
						key={uuid()}
					>
						{list[item].name}
					</MenuItem>)
				}
			</Select>
		</FormControl>
  )
}