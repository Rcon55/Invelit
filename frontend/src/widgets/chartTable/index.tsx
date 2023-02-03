import React from 'react'
import { useTypedSelector } from '../../entities';
import { getTable, getHeader, getIdColumn } from '../../features/getTable';
import { TableMenu } from './menu'
import { Table } from './table'

export const ChartTable = () => {
	const activeTable = useTypedSelector(state => state.states.activeDataTable)
	const table = getTable(activeTable)
	const columns = table && table[0] && getHeader(activeTable)
	const pk = table && table[0] && getIdColumn(activeTable)

	return (
		<div>
			<TableMenu />
			{(!table || !table[0] || !columns || !pk) ? false :
				<Table 
				table={table}
				columns={columns}
				pk={pk}
				/>
			}
		</div>
	)
}
