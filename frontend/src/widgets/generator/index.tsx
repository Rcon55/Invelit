import React, { useState } from 'react'
import { DatasetInputBlock, ModelSelector } from './ui/inputGroup';
import { Box, Button } from '@mui/material';
import { ModelSettings } from './ui/modelSettings';
import { DatasetHeaderType } from '../../entities/generators';


export const GeneratorsTab = () => {
	const [model, setModel] = useState('')
	const [header, setHeader] = useState({name: '', comment: ''})

	const handleChangeDatasetHeader = (field:'name'|'comment', value:string) => {
		setHeader({...header, [field]: value})
	}

	return (
		<Box sx={{margin: '1rem'}}>
			<DatasetInputBlock headerSetter={handleChangeDatasetHeader}/>
			<ModelSelector modelSetter={setModel}/>
			<ModelSettings model={model} header={header}/>
		</Box>
	)
}
