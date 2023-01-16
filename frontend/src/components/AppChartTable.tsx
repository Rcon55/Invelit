import { Button, Menu, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react'
import { useAppDispatch, useTypedSelector } from '../hooks/typedHooks';
import { SelectActions } from '../types/store';
import {v4 as uuid} from 'uuid';
import { APIrequests, APITable, dataGetAPI, dataPostAPI } from '../API/dataAPI';

const getTable = (store: any, tableName:string) => {
	switch (tableName) {
		case 'Samples': return(store.samples)
		case 'Properties': return(store.properties)
		case 'Experiments': return(store.experiments)
		case 'Properties': return(store.properties)
	}
}

const SelectTableMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	}

	const handleClose = () => {
		setAnchorEl(null);
	}

	return(
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				+
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
				'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>Выбрать таблицу</MenuItem>
				<MenuItem onClick={handleClose} disabled>Добавить таблицу</MenuItem>
			</Menu>
		</div>
	)
}

const TableMenu = () => {
	return(
		123
	)
}

const AppChartTable = () => {
	const dispatch = useAppDispatch();
	const activeTable = useTypedSelector(state => state.select.activeDataTable);

	const dictTables = useTypedSelector(state => state.data.dictTables);
	const dataStore = useTypedSelector(state => state.data);
	const data = getTable(dataStore, activeTable)
	const dict = dictTables[activeTable];
	let selectedSamples: any = [];

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
		selectedSamples = selectionModel
		dispatch({type: SelectActions.UPDATE_SELECTED_SAMPLES, data: selectionModel})
	}

	async function sendDelete (){
		if (confirm("Вы уверены что хотите удалить эти данные?")) {
			console.log('delete')
			await dataPostAPI(APITable[activeTable], APIrequests.DELETE_SAMPLES, selectedSamples)
			console.log(selectedSamples)
			dispatch(dataGetAPI(APITable[activeTable]))
		}
	}


	return (
		<div>
			<Button 
				id={uuid()}
				variant="outlined"
				sx={{ m: 1,  width: '100px'}}
				onClick={() => dispatch(dataGetAPI(APITable[activeTable]))}
				>Обновить</Button>
			<Button 
				id={uuid()}
				variant="outlined"
				color='error'
				sx={{ m: 1,  width: '100px'}}
				onClick={() => sendDelete()}
				>Удалить</Button>

			<SelectTableMenu />

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
		</div>
	);
}

export default AppChartTable