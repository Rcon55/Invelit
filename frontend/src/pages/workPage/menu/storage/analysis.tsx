import { Tab, Tabs } from '@mui/material';
import React from 'react'
import { TabPanel } from '../../../../shared/components/tabs';

export const Analysis = () => {
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
					label='Статистика'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/>
				<Tab 
					component="a"
					value={1}
					label='История'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/>
			</Tabs>

			<TabPanel id={'statistic'} value={state} index={0}>
				<p>Статистика</p>
			</TabPanel>

			<TabPanel id={'history'} value={state} index={1}>
				<p>История</p>
			</TabPanel>

		</div>
	)
}

 