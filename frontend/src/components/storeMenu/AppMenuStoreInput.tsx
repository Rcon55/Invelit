import { Button, Grid } from '@mui/material'
import * as React from 'react'
import {v4 as uuid} from 'uuid';
import { useAppDispatch } from '../../hooks/typedHooks';
import { APIrequests, APITable, dataGetAPI, dataPostAPI } from '../../API/dataAPI';
import store from '../../store/store';
import { SelectActions } from '../../types/store';
import { TableSelector } from './../elements/selectors';
import { InputBlock } from '../elements/inputs';


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
	

	return(
		<div>
			<TableSelector
				list={tableList}
				onSelect={(t) => setSelectedTable(t)}
				defaultValue={dict[selTable] ? dict[selTable].name : ''}
			/>
			<Grid container>
				<Grid item md={8}>
					{!dict[selTable] ? false :
					Object.keys(dict[selTable].columns).map(field => 
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