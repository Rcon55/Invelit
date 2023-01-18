import { Button, Typography } from '@mui/material'
import * as React from 'react'
import { TableSelector } from '../elements/selectors'

const MenuStoragesTab = () => {
	const [dataKit, setDataKit] = React.useState('')
	return (
		<div>
			<Typography variant="subtitle1" gutterBottom m={2}>
				Вы можете выгрузить из глобального хранилища данные, входящие в следующие 
				группы доступа:
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
				Для синхронизации глобального и локального хранилища необходимо 
				перейти на вкладку "Обмен"
			</Typography>
		</div>
	)
}

export default MenuStoragesTab