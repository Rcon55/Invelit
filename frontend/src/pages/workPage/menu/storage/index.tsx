import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react'
import { Analysis } from './analysis';
import { Load } from './load';
import { Server } from './server';
import { TabPanel } from '../../../../shared/components/tabs';
import { Client } from './client';


export const Storage = () => {
	const [state, setState] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setState(newValue);
	};

	return (
		<div>
			<Box
				sx={{
					width: '100%',
					height: '42px',					
				}}
			>
				<Tabs
					value={state}
					onChange={handleChange}
					variant="fullWidth"
					sx={{height: '42px', minHeight: '42px'}}
				>
					<Tab
						value={0}
						label='Сервер'
						sx={{minHeight: '42px', height: '42px'}}
						/>
					<Tab 
						value={1}
						label='Клиент'
						sx={{minHeight: '42px', height: '42px'}}
						/>
					<Tab 
						value={2}
						label='Операции'
						sx={{minHeight: '42px', height: '42px'}}
						/>
					{/* <Tab 
						value={3}
						label='Анализ'
						sx={{minHeight: '42px', height: '42px'}}
						/> */}
				</Tabs>
			</Box>
 
			<TabPanel id="server" value={state} index={0}>
				<Server />
			</TabPanel>

			<TabPanel id="client" value={state} index={1}>
				<Client />
			</TabPanel>

			<TabPanel id="load" value={state} index={2}>
				<Load />
			</TabPanel>

			{/* <TabPanel id="analysis" value={state} index={3}>
				<Analysis />
			</TabPanel> */}

		</div>
	)
}
  
