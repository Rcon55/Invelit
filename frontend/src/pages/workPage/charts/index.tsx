import React from 'react'
import { Tab, Tabs } from '@mui/material';

import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import ScatterPlotRoundedIcon from '@mui/icons-material/ScatterPlotRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import { TabPanel } from '../../../shared/components/tabs';
import { ChartTable } from '../../../widgets/chartTable';


export const Charts = () => {
	const [state, setState] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setState(newValue);
	};

	return (
		<div>
			<Tabs
				value={state}
				onChange={handleChange}
				variant="fullWidth"
				centered
			>
				<Tab
					component="a"
					icon={<TableChartRoundedIcon/>} 
					iconPosition="start" 
					label="Таблица"
					value={0}
					sx={{minHeight: '30px'}}
				/>

				<Tab 
					component="a"
					icon={<ScatterPlotRoundedIcon/>} 
					iconPosition="start" 
					label="Кросс-плот"
					value={1}
					sx={{minHeight: '30px'}}
				/>

				<Tab 
					component="a"
					icon={<LeaderboardRoundedIcon/>} 
					iconPosition="start" 
					label="Гистограмма"
					value={2}
					sx={{minHeight: '30px'}}
				/>
			</Tabs>

			<TabPanel
				value={state}
				index={0}
				id="table"
				height="70vh"
			>
				<ChartTable />
			</TabPanel>

			{/* <TabPanel
				value={state}
				index={1}
				id="chart"
				height="70vh"
			>
				<AppChartPlot />
			</TabPanel> */}
		</div>
	)
}
