import { Autocomplete, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import * as React from 'react'
import { InputBlockProps, TableSelectorProps } from '../types/props'
import {v4 as uuid} from 'uuid';
import { useAppDispatch, useTypedSelector } from '../hooks/typedHooks';
import { APIrequests, APITable, dataGetAPI, dataPostAPI } from '../API/dataAPI';
import store from '../store/store';
import { SelectActions } from '../types/store';

const InputBlock: React.FC<InputBlockProps> = ( props ) => {
	const { id, label, options, getValue, dataFormat} = props;
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

const TableSelector: React.FC<TableSelectorProps> = (props) => {
	const { list, onSelect, defaultValue } = props;
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

const AppMenuStoreInput = () => {
	const dispatch = useAppDispatch();
	const [dict, updateDict] = React.useState(store.getState().data.dictTables)
	const [selTable, setTable] = React.useState(Object.keys(dict)[0]);

	const setSelectedTable = (table: string) => {
		dispatch({type: SelectActions.SET_ACTIVE_DATA_TABLE, data: table});
		setTable(table);
	}

	//Значения полей ввода
	const values:any = {};
	const setVal = (field: string, value:string) => {
		values[field] = value 
	}

	//Формирование списка таблиц для селектора
	const tableList: any = {};
	Object.keys(dict).map(table => tableList[table] = {name: dict[table].name});

	async function sendPost (tableName: string, values: any) {
		await dataPostAPI(APITable[tableName] , APIrequests.ADD_SAMPLE, values)
		dispatch(dataGetAPI(APITable[tableName]))
	}
	
	async function sendDelete (tableName: string){
		const selectedSamples = store.getState().select.selectedSamples
		await dataPostAPI(APITable[tableName], APIrequests.DELETE_SAMPLES, selectedSamples)
		dispatch(dataGetAPI(APITable[tableName]))
	}

	console.log(store.getState().data.properties)

	return(
		<div>
			<TableSelector 
				list={tableList}
				onSelect={(t) => setSelectedTable(t)}
				defaultValue={dict[selTable].name}
			/>
			<Grid container>
				<Grid item md={8}>
					{Object.keys(dict[selTable].columns).map(field => 
						!dict[selTable].columns[field].editable ? 
						<div key={uuid()}></div> : 
						<InputBlock 
							key={uuid()}
							id={field}
							label={dict[selTable].columns[field].name}
							options={[]}
							getValue={setVal}
						/>)}
				</Grid>
				<Grid item md>

					<Button 
						key={uuid()}
						id={uuid()}
						variant="outlined"
						sx={{ mt: 2, ml: 2, width: '70%'}}
						onClick={() => sendPost(selTable, values)}
						>Сохранить</Button>

					<Button 
						key={uuid()}
						id={uuid()}
						variant="outlined"
						sx={{ mt: 2, ml: 2, width: '70%'}}
						onClick={() => dispatch(dataGetAPI(APITable[selTable]))}
						>Обновить</Button>

					<Button 
						key={uuid()}
						id={uuid()}
						variant="outlined"
						sx={{ mt: 2, ml: 2, width: '70%'}}
						color="error"
						onClick={() => sendDelete(selTable)}
					>Удалить</Button>

				</Grid>
			</Grid>
		</div>
	)
}

export default AppMenuStoreInput