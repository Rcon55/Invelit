import React from 'react'
import { ExponentialModel } from '../../../entities/generators'

interface ModelSettingsProps {
	model: string
}

export const ModelSettings = ({model}: ModelSettingsProps) => {
	switch (model) {
		case 'exponential': return(<ExponentialModel/>)
		default: return false
	}
}
