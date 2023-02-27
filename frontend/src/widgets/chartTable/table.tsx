import { DataGrid, GridSelectionModel } from '@mui/x-data-grid';
import React from 'react'
import { useAppDispatch, useTypedSelector } from '../../entities';
import { store } from '../../entities/store';
import { getHeader, getIdColumn, getTable } from '../../features/getTable';
import { SelectedDataType } from '../../entities/store/states/types';
import { findAllChilds } from '../../features/storeMethods/selections';
import { statesActions } from '../../entities/store/states/actions';


export const Table = () => {
	const activeTable = useTypedSelector(state => state.states.activeDataTable);
	const selectedRow = useTypedSelector(state => state.states.selectedData[activeTable])
	const table = getTable(activeTable);
	const columns = table?.[0] && getHeader(activeTable);
	const pk = table?.[0] && getIdColumn(activeTable);

	const dispatch = useAppDispatch();	
	const setSelectionModel = (selectionModel: GridSelectionModel) => {
		const state: SelectedDataType = Object.assign({}, store.getState().states.selectedData);
		state[activeTable] = selectionModel;
		for (let id of selectionModel) {
			const childs = findAllChilds(activeTable, Number(id));
			for (let tableName of Object.keys(childs)) {
				state[tableName] = Array.from(new Set([...state[tableName], ...childs[tableName]]))
			}
		}
		dispatch({type: statesActions.UPDATE_SELECTED_DATA, payload: state});
	};

	return (
		<div style={{ width: '100%', height: `calc(100vh - 102px)` }} id='table-box'>
			{(!table?.[0] || !columns || !pk) ? false :
			<DataGrid
				checkboxSelection={true} 
				rows={table} 
				columns={columns}
				getRowId={(row) => row[pk]}
				selectionModel={selectedRow}
				onSelectionModelChange={(newSelectionModel) => {
					setSelectionModel(newSelectionModel)}}
			/>}
		</div>
	);
}