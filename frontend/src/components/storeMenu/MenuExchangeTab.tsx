import { Button } from '@mui/material'
import * as React from 'react'
import { useAppDispatch } from '../../hooks/typedHooks'
import { fetchDictTables } from '../../store/actions/dictTables'
import { fetchExperiments } from '../../store/actions/experiments'
import { fetchProperties } from '../../store/actions/properties'
import { fetchSamples } from '../../store/actions/samples'

const MenuExchangeTab = () => {
	const dispatch = useAppDispatch()

	const downloadData = (dispatch:any) => {
		dispatch(fetchSamples())
		dispatch(fetchDictTables())
		dispatch(fetchExperiments())
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

export default MenuExchangeTab