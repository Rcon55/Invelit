import { Typography } from '@mui/material'
import React from 'react'
import { CloneStorageForm } from './ui'

export const StoragesTab = () => {
	const [dataKit, setDataKit] = React.useState('')
	console.log(dataKit)
	return (
		<div>
			<Typography variant="subtitle1" gutterBottom m={2}>
				Выберете набор данных для клонирования:
			</Typography>

			<CloneStorageForm callback={setDataKit}/>

			<Typography variant="subtitle1" gutterBottom m={2}>
				Выбранный набор данных будет скопирован в ваш репозиторий и станет 
				доступен для выгрузки с сервера
			</Typography>
		</div>
	)
}
 