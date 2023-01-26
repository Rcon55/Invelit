import { Tab, Tabs } from '@mui/material';
import React from 'react'
import { TabPanel } from '../../../../shared/components/tabs';
import { DataMenu } from '../../../../widgets/dataMenu';
import { VisMenu } from '../../../../widgets/visualization';

export const SettingsTab = () => {
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
					label='Данные'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/>
				<Tab 
					component="a"
					value={1}
					label='График'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/>

			</Tabs>

			<TabPanel id={'dataTab'} value={state} index={0}>
				<DataMenu />
			</TabPanel>

			<TabPanel id={'visTab'} value={state} index={1}>
				<VisMenu />
			</TabPanel>

		</div>
	)
}

