import { Tab, Tabs } from '@mui/material';
import React from 'react'
import { FiltersMenu } from '../../../../widgets/filtersMenu';
import { VisMenu } from '../../../../widgets/visualization';
import { TabPanel } from '../../../../shared/components/tabs';



export const DataTab = () => {
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
					label='Фильтры'
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
				<FiltersMenu />
			</TabPanel>

			<TabPanel id={'visTab'} value={state} index={1}>
				<VisMenu />
			</TabPanel>

		</div>
	)
}

