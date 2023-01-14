import { Box, Tab, Tabs } from '@mui/material'
import * as React from 'react'
import { useAppDispatch } from '../hooks/typedHooks';
import { fetchDictTables } from '../store/actions/dictTables';
import { fetchSamples } from '../store/actions/samples';
import AppMenuStoreAnalysis from './AppMenuStoreAnalysis';
import { AppMenuStoreLocal } from './AppMenuStoreLocal';
import AppMenuStoreServer from './AppMenuStoreServer';
import { TabPanel } from './elements/tabs';

const AppMenuStore = () => {
	const [state, setState] = React.useState(0);
	const dispatch = useAppDispatch();

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setState(newValue);
	};

	React.useEffect(() => {dispatch(fetchSamples())}, []);
	React.useEffect(() => {dispatch(fetchDictTables())}, []);


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
						label='Загрузка'
						/>
					<Tab 
						value={2}
						label='Анализ'
						/>
				</Tabs>
			</Box>
 
			<TabPanel id="server" value={state} index={0}>
				<AppMenuStoreServer />
			</TabPanel>

			<TabPanel id="local" value={state} index={1}>
				<AppMenuStoreLocal/>
			</TabPanel>

			<TabPanel id="analysis" value={state} index={2}>
				<AppMenuStoreAnalysis/>
			</TabPanel>

		</div>
	)
}

export default AppMenuStore