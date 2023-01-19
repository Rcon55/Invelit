import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { InputBlockProps } from "../../types/props";


export const InputBlock = ({ id, 
							label, 
							options, 
							getValue, 
							dataFormat 
							}:InputBlockProps) => {
	return(
		<Autocomplete
			freeSolo
			autoSelect
			id={id}
			disableClearable
			options={options}
			onChange={(event, val) => getValue(id, val)}
			renderInput={(params) => (
				<TextField
					{...params}
					label={label}
					InputProps={{
						...params.InputProps,
						type: 'search',
					}}
				/>
			)}
			sx={{ m: 2, width: '90%'}}
			size='small'
		/>
	)
}