import React from 'react'
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import {v4 as uuid} from 'uuid';

import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import { useAppDispatch } from '../../../entities';
import { statesActions } from '../../../entities/store/states/actions';
import { store } from '../../../entities/store';
import { useState } from 'react';


interface NavbarItemProps {
	icon: React.ReactNode,
	actionFunction?: any,
}

const NavbarItem = ({icon, actionFunction}: NavbarItemProps) => {
	return(
		<ListItem key={uuid()} disablePadding>
			<ListItemButton 
				onClick={() => actionFunction()}
				sx={{height:60}}
			>
				<ListItemIcon>
					{icon}
				</ListItemIcon>
			</ListItemButton>
		</ListItem>
	)
}

export const Sidebar = () => {
	const [state, setState] = useState('storage');
	const dispatch = useAppDispatch()
	const drawerWidth = 60;

	const setActivePage = (page:string) => {
		dispatch({type: statesActions.SET_ACTIVE_PAGE, payload: page})
		setState(page);
	}

	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
			variant="permanent"
			anchor="left"
		>
			<Divider />
			<List>
				<NavbarItem 
					icon={<StorageRoundedIcon 
							sx={{ fontSize: 28 }}
							color={state === 'storage' ? 'primary': 'action'}
						/>}
					actionFunction={() => setActivePage('storage')}

				/>
				<NavbarItem 
					icon={<QueryStatsRoundedIcon 
							sx={{ fontSize: 28 }}
							color={state === 'plot' ? 'primary': 'action'}
						/>}
					actionFunction={() => setActivePage('plot')}
				/>
			</List>
		</Drawer>
	)
}
