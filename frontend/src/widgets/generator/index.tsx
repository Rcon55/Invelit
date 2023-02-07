import React, { useRef } from 'react'
import { DatasetInputBlock, ModelSelector } from './ui/inputGroup';
import { Box, Button } from '@mui/material';

export const GeneratorsTab = () => {
	const datasetName = useRef()
	const datasetComment = useRef()
	return (
		<Box sx={{margin: '1rem'}}>
			<DatasetInputBlock nameRef={datasetName} commentRef={datasetComment}/>
			<ModelSelector/>
			<Button
				variant="outlined"
				sx={{ mt: 2, ml: 2}}
				onClick={() => console.log(datasetName)}
			>Создать</Button>
		</Box>
	)
}
