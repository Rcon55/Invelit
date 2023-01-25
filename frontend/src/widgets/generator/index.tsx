import { Button } from '@mui/material';
import React from 'react'
import { GeneratorRequests, postGenerator } from '../../features/generators';

export const GeneratorsTab = () => {
	return (
		<div>
			<Button
				variant="outlined"
				sx={{ mt: 2, ml: 2}}
				onClick={() => postGenerator(GeneratorRequests.create_samples)}
			>Создать</Button>
		</div>
	)
}
