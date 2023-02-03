import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getPublicStorages } from './requests';

import {v4 as uuid} from 'uuid';

interface propsType {
	callback: Function
}

export const CloneStorageForm = (props: propsType) => {
	const [group, setGroup] = useState('')
	const [groupList, setGroupList] = useState([])

	const handleChange = (event: SelectChangeEvent) => {
		setGroup(event.target.value as string);
	}

	useEffect(() => {
		getPublicStorages().then(responce => setGroupList(responce))
	}, [])

	useEffect(() => {
		props.callback(group)
	}, [group])
	

	return (
		<Box sx={{ padding: 2 }}>
		<FormControl fullWidth>
			<InputLabel id="storage-select-label">Наборы данных</InputLabel>
			<Select
				labelId="storage-select-label"
				id="storage-select"
				value={group}
				label="Наборы данных"
				onChange={handleChange}
			>
				{!groupList[0] ? false :
				groupList.map(item => 
					<MenuItem key={uuid()} value={item.group}>{item.name}</MenuItem>
				)}

				<MenuItem value={'private'}>+ Добавить приватный набор данных</MenuItem>
			</Select>
		</FormControl>
		<Button
			variant="contained"
			disabled={group === '' || false}
			sx={{mt:2, height: '40px', width: '30%'}}
		>
			Копировать
		</Button>
		{group !== 'private' ? false :
		<TextField
			sx={{mt: 2, ml: 2, height: '40px'}}
			label="Ключ"
			id="outlined-size-small"
			size="small"
			hidden={group === 'private' ? true : false}
		/>}
		</Box>
	)
}
