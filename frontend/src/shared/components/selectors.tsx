import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import * as React from "react";
import {v4 as uuid} from 'uuid';
import { useTypedSelector } from "../../entities";

interface TableSelectorProps {
	label: string;
	onSelect?: (state: string) => void;
	defaultValue?: string;
	size?: "small" | "medium";
	width?: string;
}


export const TableSelector = ({	label,
								onSelect, 
								defaultValue, 
								size, 
								width,
							}: TableSelectorProps) => {
	const [table, setTable] = React.useState('')

	const tables:any = {}
	const dict = useTypedSelector(state => state.data.dictTables)
	Object.keys(dict).map(table => tables[table] = {name: dict[table].name})

	const handleChange = (event: SelectChangeEvent) => {
		onSelect(Object.keys(tables).find(key => tables[key].name === event.target.value));
		setTable(event.target.value as string);
	}
 
	return (
		<FormControl
			sx={{ m: 1, width: width || "300px" }}
		>
			<InputLabel id={uuid()}>{label}</InputLabel>
			<Select
				id={uuid()}
				value={table}
				onChange={handleChange}
				size={size || 'medium'}
			>
				{Object.keys(tables).map(item => 
					<MenuItem
						value={tables[item].name}
						key={uuid()}
					>
						{tables[item].name}
					</MenuItem>)
				}
			</Select>
		</FormControl>
  )
}