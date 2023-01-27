import { Button } from '@mui/material';
import React from 'react'
import { GeneratorRequests, postGenerator } from '../../features/generators';
import { sendGeneratorModel } from './requests';
import { GenInputGroup } from './ui/inputGroup';

export const GeneratorsTab = () => {
	const inputValues:any = {}
	const setInputValues = (prop:string, val:any) => {inputValues[prop] = val}
	return (
		<div>
			<GenInputGroup valSetter={setInputValues} />
			<Button
				variant="outlined"
				sx={{ mt: 2, ml: 2}}
				// onClick={() => postGenerator(GeneratorRequests.create_samples)}
				onClick={() => sendGeneratorModel(inputValues)}
			>Создать</Button>
		</div>
	)
}
