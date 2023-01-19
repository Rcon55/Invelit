import { Tab, Tabs, Typography } from '@mui/material'
import * as React from 'react'
import { TabPanel } from '../elements/tabs';
import MenuData from './MenuData';
import MenuVis from './MenuVis';

const MenuSettings = () => {
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
				<MenuData />
			</TabPanel>

			<TabPanel id={'visTab'} value={state} index={1}>
				<MenuVis />
			</TabPanel>

		</div>
	)
}

export default MenuSettings