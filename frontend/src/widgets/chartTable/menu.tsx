import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import { useAppDispatch, useTypedSelector } from '../../entities';
import { statesActions } from '../../entities/store/states/actions';
import { TableSelector } from '../../shared/components/selectors'
import DeleteIcon from '@mui/icons-material/Delete';
import { store } from '../../entities/store';


export const TableMenu = () => {
	const dispatch = useAppDispatch()
	const [selTable, setSelTable] = useState(store.getState().states.activeDataTable)

	const setSelectedTable = (table: string) => {
		dispatch({type: statesActions.SET_ACTIVE_DATA_TABLE, payload: table})
		setSelTable(table)
	}

	return (
		<div>
			<TableSelector 
				label={" "}
				onSelect={setSelectedTable}
				defaultValue={selTable}
				size={"small"}
				width={"200px"}
			/>
			<IconButton aria-label="delete" size="large">
				<DeleteIcon fontSize="inherit" color='error'/>
			</IconButton>
		</div>
	)
}