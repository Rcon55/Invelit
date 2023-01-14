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
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';

const NavbarItem = (props: any) => {
	return(
		<ListItem key={uuid()} disablePadding>
			<ListItemButton sx={{height:60}}>
				<ListItemIcon>
					{props.icon}
				</ListItemIcon>
			</ListItemButton>
		</ListItem>
	)
}

const AppNavbar = () => {
	const drawerWidth = 60;
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
				<NavbarItem icon={<StorageRoundedIcon/>}/>
				<NavbarItem icon={<QueryStatsRoundedIcon/>}/>
				<NavbarItem icon={<CalculateRoundedIcon/>}/>
			</List>
		</Drawer>
	);
}


export default AppNavbar