import React, { useState } from 'react'
import { useTypedSelector } from '../../entities';
import { getTable, getHeader, getIdColumn } from '../../features/getTable';
import { TableMenu } from './menu'
import { Table } from './table'

export const ChartTable = () => {
	const [state, setState] = useState()
	const activeTable = useTypedSelector(state => state.states.activeDataTable)
	const table = getTable(activeTable)
	const columns = table[0] ? getHeader(activeTable) : false
	const pk = table[0] ? getIdColumn(activeTable) : false

	return (
		<div>
			<TableMenu />
			{(!table[0] || !columns || !pk) ? false :
				<Table 
				table={table}
				columns={columns}
				pk={pk}
				/>
			}
		</div>
	)
}
