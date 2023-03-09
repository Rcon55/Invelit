import React from 'react'
import { ChartSelector } from '../../entities'
import { DataList } from './dataSelector'
import { Settings } from './settings'

const datat = [{
	x: 'porosity',
	y: 'permeability',
	z: 'density',
},]


export const VisMenu = () => {
	return (
		<div>
			<ChartSelector /> 
			<DataList data={datat}/> 
			<Settings />
		</div>
	)
}

