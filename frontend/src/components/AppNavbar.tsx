import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import {v4 as uuid} from 'uuid';

import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import AppMenuStore from './AppMenuStore';
import AppMenuChart from './AppMenuChart';

interface NavbarItemProps {
	icon: React.ReactNode,
	actionFunction?: any,
}

const NavbarItem = ({icon, actionFunction} : NavbarItemProps) => {
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

const AppNavbar = (props: any) => {
	const drawerWidth = 60;

	const setState = (state:string) => {
		props.changeState(state)
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
					actionFunction={() => setState('storage')}
				/>
				<NavbarItem 
					icon={<QueryStatsRoundedIcon sx={{ fontSize: 28 }}/>}
					actionFunction={() => setState('plot')}
				/>
			</List>
		</Drawer>
	);
}


export default AppNavbar