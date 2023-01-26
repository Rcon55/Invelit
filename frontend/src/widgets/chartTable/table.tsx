import { DataGrid, GridColumns } from '@mui/x-data-grid';
import React from 'react'
import { useAppDispatch } from '../../entities';
import { statesActions } from '../../entities/store/states/actions';

interface TableType {
	table: any,
	columns: GridColumns<any>,
	pk: string,
}

export const Table = ({table, columns, pk}: TableType) => {
	const dispatch = useAppDispatch();
	
	let selectedSamples = []
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
				getRowId={(row) => row[pk]}
				onSelectionModelChange={(newSelectionModel) => {
					setSelectionModel(newSelectionModel)}}
			/>
		</div>
	);
}