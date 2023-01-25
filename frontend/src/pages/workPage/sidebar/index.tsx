import React from 'react'
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import {v4 as uuid} from 'uuid';

import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import { useAppDispatch } from '../../../entities/store/hooks/typedHooks';
import { statesActions } from '../../../entities/store/states/actions';

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
	const dispatch = useAppDispatch()
	const drawerWidth = 60;

	const setActivePage = (page:string) => {
		dispatch({type: statesActions.SET_ACTIVE_PAGE, payload: page})
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
					icon={<StorageRoundedIcon sx={{ fontSize: 28 }}/>}
					actionFunction={() => setActivePage('storage')}
				/>
				<NavbarItem 
					icon={<QueryStatsRoundedIcon sx={{ fontSize: 28 }}/>}
					actionFunction={() => setActivePage('plot')}
				/>
			</List>
		</Drawer>
	)
}
