import React from 'react'
import { DatasetHeaderType, ExponentialModel } from '../../../entities/generators'

interface ModelSettingsProps {
	model: string,
	header: DatasetHeaderType,
}

export const ModelSettings = ({model, header}: ModelSettingsProps) => {
	switch (model) {
		case 'exponential': return(<ExponentialModel header={header}/>)
		default: return <></>
	}
}
