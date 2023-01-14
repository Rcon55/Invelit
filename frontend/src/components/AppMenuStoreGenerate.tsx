import { Button, FormControl, InputLabel, ListSubheader, MenuItem, Select, TextField } from '@mui/material';
import * as React from 'react'
import { genAPIrequests, genPostAPI } from '../API/generatorAPI';
import { useTypedSelector } from '../hooks/typedHooks';

const ModelsSelector =() => {
	return(
		<FormControl sx={{ mt: 2, ml: 2, width: '70%'}}>
			<InputLabel htmlFor="models-select">Выбор моделей</InputLabel>
			<Select defaultValue={0} id="models-select" label="Выбор моделей">
				<MenuItem value={0}>
					<em>Только образцы</em>
				</MenuItem>
				<ListSubheader>Комплексные</ListSubheader>
					<MenuItem value={10}>Пористость-Проницаемость</MenuItem>
				<ListSubheader>ФЕС</ListSubheader>
					<MenuItem value={20}>Пористость-Проницаемость</MenuItem>
			</Select>
		</FormControl>
	)
}

const AppMenuStoreGenerate = () => {
	const { samples } = useTypedSelector(state => state.data);
	const { dictTables } = useTypedSelector(state => state.data);
	
	return (
		<div>
			<TextField 
				id="generate-samples" 
				label="Кол-во образцов" 
				variant="outlined" 
				size='small'
				sx={{ mt: 2, ml: 2, width: '40%'}}
			/>
			<TextField 
				id="generate-wells" 
				label="Кол-во скважин" 
				variant="outlined" 
				size='small'
				sx={{ mt: 2, ml: 2, width: '40%'}}
			/>
			<Button 
				variant="outlined"
				sx={{ mt: 2, ml: 2}}
				onClick={() => genPostAPI(genAPIrequests.create_samples, {})}
			>Создать</Button>

			<br/>

			<ModelsSelector/>
		</div>
	)
}

export default AppMenuStoreGenerate