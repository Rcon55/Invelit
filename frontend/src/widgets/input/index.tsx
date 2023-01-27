import { Button, Grid } from '@mui/material';
import React from 'react'
import {v4 as uuid} from 'uuid';
import { InputBlock } from '../../entities/ui/inputs';
import { useAppDispatch } from '../../entities';
import { store } from '../../entities/store';
import { statesActions } from '../../entities/store/states/actions';
import { fetchDictTables, fetchExperiments, fetchProperties, fetchSamples } from '../../features/loadData';
import { DataRequests, sendToServer } from '../../features/sendDataToServer';
import { TableSelector } from '../../shared/components/selectors';

export const InputTab = () => {
	const dispatch = useAppDispatch();
	const [dict, updateDict] = React.useState(store.getState().data.dictTables)
	const [selTable, setTable] = React.useState(Object.keys(dict)[0]);

	const setSelectedTable = (table: string) => {
		dispatch({type: statesActions.SET_ACTIVE_DATA_TABLE, payload: table});
		setTable(table);
	}

	const downloadData = () => {
		dispatch(fetchSamples())
		dispatch(fetchExperiments())
		dispatch(fetchDictTables())
		dispatch(fetchProperties())
	}

	//Значения полей ввода
	const values:any = {};
	const setVal = (field: string, value:string) => {
		values[field] = value 
	}

	async function sendPost (tableName: string, values: any) {
		await sendToServer(DataRequests.ADD_SAMPLE, values)
	}
	
	async function sendDelete (tableName: string){
		const selectedSamples = store.getState().states.selectedSamples
		await sendToServer(DataRequests.DELETE_SAMPLES, selectedSamples)
	}
	

	return(
		<div>
			<TableSelector
				label={"Таблица"}
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
						onClick={downloadData}
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
