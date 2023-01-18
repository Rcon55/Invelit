import { Tab, Tabs } from '@mui/material'
import * as React from 'react'
import { TabPanel } from './../elements/tabs'
import MenuExchangeTab from './MenuExchangeTab';
import MenuStoragesTab from './MenuStoragesTab';
import MenuSubscribeTab from './MenuSubscribeTab';

const AppMenuStoreServer = () => {
	const [state, setState] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setState(newValue);
	}

	return (
		<div>
			<Tabs
				value={state}
				onChange={handleChange}
				variant="fullWidth"
				textColor='secondary'
				indicatorColor='secondary'
				sx={{minHeight: "10px"}}
			>
				<Tab 
					component="a"
					value={0}
					label='Обмен'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/>
				<Tab 
					component="a"
					value={1}
					label='Подписки'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/>
				<Tab 
					component="a"
					value={2}
					label='Хранилища'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/>
			</Tabs>

			<TabPanel id={'exchange'} value={state} index={0}>
				<MenuExchangeTab />
			</TabPanel>

			<TabPanel id={'subscribe'} value={state} index={1}>
				<MenuSubscribeTab />
			</TabPanel>

			<TabPanel id={'storages'} value={state} index={2}>
				<MenuStoragesTab  />
			</TabPanel>
		</div>
	)
}

export default AppMenuStoreServer