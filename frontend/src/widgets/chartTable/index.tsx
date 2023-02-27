import React from 'react'
import { useTypedSelector } from '../../entities';
import { getTable, getHeader, getIdColumn } from '../../features/getTable';
import { TableMenu } from './menu'
import { Table } from './table'

export const ChartTable = () => {

	return (
		<div>
			<TableMenu />
			<Table />
		</div>
	)
}
