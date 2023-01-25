import { Button } from '@mui/material'
import React from 'react'
import { useAppDispatch } from '../../entities'
import { fetchDictTables, fetchExperiments, fetchProperties, fetchSamples } from '../../features/loadData'

export const ExchangeTab = () => {
	const dispatch = useAppDispatch()

	const downloadData = (dispatch:any) => {
		dispatch(fetchSamples())
		dispatch(fetchExperiments())
		dispatch(fetchDictTables())
		dispatch(fetchProperties())
	}
	return (
		<div>
			<Button
				variant="outlined"
				sx={{ m: 1}}
				onClick={() => downloadData(dispatch)}
			>
				Выгрузить данные с сервера
			</Button>
		</div>
	)
}
