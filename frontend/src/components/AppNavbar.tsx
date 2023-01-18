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
	onClick?: any,
}

const NavbarItem = ({icon, onClick} : NavbarItemProps) => {
	return(
		<ListItem key={uuid()} disablePadding>
			<ListItemButton 
				// onClick={onClick}
				sx={{height:60}}
			>
				<ListItemIcon>
					{icon}
				</ListItemIcon>
			</ListItemButton>
		</ListItem>
	)
}

const AppNavbar = (setValue: any) => {
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
				<NavbarItem 
					icon={<StorageRoundedIcon/>}
					// onClick={setValue(<AppMenuStore />)}
				/>
				<NavbarItem 
					icon={<QueryStatsRoundedIcon/>}
					// onClick={setValue(<AppMenuChart />)}
				/>
			</List>
		</Drawer>
	);
}


export default AppNavbar