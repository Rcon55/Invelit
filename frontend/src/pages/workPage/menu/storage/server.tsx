import React from 'react'
import { Tab, Tabs } from '@mui/material';
import { TabPanel } from '../../../../shared/components/tabs';
import { ExchangeTab } from '../../../../widgets/exchange';
import { ServerManager } from '../../../../widgets/serverManager';
import { StoragesTab } from '../../../../widgets/storages';




export const Server = () => {
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
					label='Загрузка'
					sx={{minHeight: '42px', height: '42px'}}
				/>
				<Tab
					component="a"
					value={1}
					label='Управление'
					sx={{minHeight: '42px', height: '42px'}}
				/>
				{/* <Tab 
					component="a"
					value={2}
					label='Подписки'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/> */}
				<Tab 
					component="a"
					value={3}
					label='Хранилища'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/>
			</Tabs>

			<TabPanel id={'exchange'} value={state} index={0}>
				<ExchangeTab />
			</TabPanel>

			<TabPanel id={'serverManager'} value={state} index={1}>
				<ServerManager />
			</TabPanel>

			{/* <TabPanel id={'subscribe'} value={state} index={2}>
				<SubscribeTab />
			</TabPanel> */}

			<TabPanel id={'storages'} value={state} index={3}>
				<StoragesTab  />
			</TabPanel>
		</div>
	)
}

