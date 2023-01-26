import React from 'react'
import { Box, Tab, Tabs } from '@mui/material';
import { TabPanel } from '../../../../shared/components/tabs';
import { SettingsTab } from './settings';

export const Charts = () => {
	const [tab, setTab] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setTab(newValue);
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
					value={tab}
					onChange={handleChange}
					variant="fullWidth"
					sx={{height: '48px'}}
				>
					<Tab
						value={0}
						label='Настройки'
						/>
					<Tab 
						value={1}
						label='Модели'
						/>
				</Tabs>
			</Box>
 
			<TabPanel id="model" value={tab} index={0}>
				<SettingsTab />
			</TabPanel>

			<TabPanel id="local" value={tab} index={1}>
				<p>Тут будут аппроксисирующие функции и распределения</p>
			</TabPanel>
		</div>
	)
}
