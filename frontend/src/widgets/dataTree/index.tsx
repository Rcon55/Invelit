import { List, ListSubheader } from '@mui/material';
import React from 'react'
import { makeDataTreeComponent } from './ui';
import { createFullDataTree } from '../../features/storeMethods/dataTree';
import { useTypedSelector } from '../../entities';

export const DataTree = () => {
	const datasets = useTypedSelector(state => state.data.groups);
	return (
		<List
			sx={{ width: '100%', bgcolor: 'background.paper' }}
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					Наборы данных:
				</ListSubheader>
			}
		>
			{datasets.map(item => makeDataTreeComponent(createFullDataTree(Number(item.group_id))))}
		</List>
	);
}