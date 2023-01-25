import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { useAppDispatch, useTypedSelector } from '../../entities';
import { statesActions } from '../../entities/store/states/actions';
import { getTable } from '../../features/getTable';
import { prepareHeader } from '../../features/prepareTableForChart';

export const Table = () => {
	const dispatch = useAppDispatch();
	const activeTable = useTypedSelector(state => state.states.activeDataTable);
	const dict = useTypedSelector(state => state.data.dictTables[activeTable]);

	let selectedSamples = []
	
	const table = getTable(activeTable)
	const columns = prepareHeader(table, dict)

	const setSelectionModel = (selectionModel: any[]) => {
		selectedSamples = selectionModel
		dispatch({type: statesActions.UPDATE_SELECTED_SAMPLES, data: selectionModel})
	}

	return (
		<div style={{ width: '100%', height: 600 }}>
			<DataGrid
				checkboxSelection={true} 
				rows={table} 
				columns={columns}
				getRowId={(row) => row['PK']}
				onSelectionModelChange={(newSelectionModel) => {
					setSelectionModel(newSelectionModel)}}
			/>
		</div>
	);
}