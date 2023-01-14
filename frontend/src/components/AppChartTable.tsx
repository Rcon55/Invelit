import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react'
import { useAppDispatch, useTypedSelector } from '../hooks/typedHooks';
import { SelectActions } from '../types/store';

const getTable = (store: any, tableName:string) => {
	switch (tableName) {
		case 'Samples': return(store.samples)
		case 'Properties': return(store.properties)
	}
}

const AppChartTable = () => {
	const dispatch = useAppDispatch();
	const activeTable = useTypedSelector(state => state.select.activeDataTable);

	const dictTables = useTypedSelector(state => state.data.dictTables);
	const dataStore = useTypedSelector(state => state.data);
	const data = getTable(dataStore, activeTable)
	const dict = dictTables[activeTable];

	let idColumn = '';
	const columns: any[] = [];

	if (!data[0] || !dict) {
		return(
			<div></div>
		)
	}

	for (let col of Object.keys(data[0])) {
		if (Object.keys(dict.columns).includes(col)) {
			if (dict.columns[col].name === 'PK') {
				idColumn = col
			}
			columns.push({
				field: col,
				hide: dict.columns[col].name === 'PK' ? true : false,
				headerName: dict.columns[col].name,
				editable: false,
				flex: true
			})
		}
	}

	const setSelectionModel = (selectionModel: any[]) => {
		dispatch({type: SelectActions.UPDATE_SELECTED_SAMPLES, data: selectionModel})
	}


	return (
		<div style={{ width: '100%', height: 600 }}>
			<DataGrid 
				checkboxSelection={true} 
				rows={data} 
				columns={columns}
				getRowId={(row) => row[idColumn]}
				onSelectionModelChange={(newSelectionModel) => {
					setSelectionModel(newSelectionModel)}}
			/>
		</div>
	);
}

export default AppChartTable