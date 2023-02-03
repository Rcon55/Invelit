import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react'
import { Analysis } from './analysis';
import { Load } from './load';
import { Server } from './server';
import { TabPanel } from '../../../../shared/components/tabs';


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
					height: '48px',					
				}}
			>
				<Tabs
					value={state}
					onChange={handleChange}
					variant="fullWidth"
					sx={{height: '48px'}}
				>
					<Tab
						value={0}
						label='Сервер'
						/>
					<Tab 
						value={1}
						label='Клиент'
						/>
					<Tab 
						value={2}
						label='Операции'
						/>
					{/* <Tab 
						value={3}
						label='Анализ'
						/> */}
				</Tabs>
			</Box>
 
			<TabPanel id="server" value={state} index={0}>
				<Server />
			</TabPanel>

			<TabPanel id="client" value={state} index={1}>
				<Typography m={2}>
					Тут будут инструменты для работы с локальным хранилищем приложения
				</Typography>
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
  
