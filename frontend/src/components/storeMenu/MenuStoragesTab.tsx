import { Button, Typography } from '@mui/material'
import * as React from 'react'
import { TableSelector } from '../elements/selectors'

const MenuStoragesTab = () => {
	const [dataKit, setDataKit] = React.useState('')
	return (
		<div>
			<Typography variant="subtitle1" gutterBottom m={2}>
				Выберете набор данных для клонирования:
			</Typography>
			<TableSelector 
				list={{['test']: {name: 'Тестовый набор данных'}}}
				onSelect={setDataKit}
			/>
			<br/>
			<Button
				variant="contained"
				disabled={dataKit === '' || false}
				sx={{m:1}}
			>
				Выгрузить
			</Button>
			<Typography variant="subtitle1" gutterBottom m={2}>
				Эта функция нужна для создания форка глобального набора данных 
				или для копирования собственного набора в БД
			</Typography>
		</div>
	)
}

export default MenuStoragesTab