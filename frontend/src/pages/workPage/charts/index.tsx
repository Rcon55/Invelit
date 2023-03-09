import React from 'react'
import { Box, Tab, Tabs } from '@mui/material';

import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import ScatterPlotRoundedIcon from '@mui/icons-material/ScatterPlotRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import { TabPanel } from '../../../shared/components/tabs';
import { ChartTable } from '../../../widgets/chartTable';
import { CrossPlot } from '../../../widgets/CrossPlot';


export const Charts = () => {
	const [state, setState] = React.useState(0);
	const tabHeight = '42px';

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setState(newValue);
	};

	return (
		<Box
			id='chartPageBox'
			sx={{
				width: '100%',
				height: '100vh',
				overflow: 'auto',
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: tabHeight,					
			}}>
				<Tabs
					value={state}
					onChange={handleChange}
					variant="fullWidth"
					// centered
					sx={{height: tabHeight, minHeight: tabHeight}}
				>
					<Tab
						// component="a"
						icon={<TableChartRoundedIcon/>} 
						iconPosition="start" 
						label="Таблица"
						value={0}
						sx={{minHeight: tabHeight, height: tabHeight}}
					/>

					<Tab 
						// component="a"
						icon={<ScatterPlotRoundedIcon/>} 
						iconPosition="start" 
						label="Кросс-плот"
						value={1}
						sx={{minHeight: tabHeight, height: tabHeight}}
					/>

					<Tab 
						// component="a"
						icon={<LeaderboardRoundedIcon/>} 
						iconPosition="start" 
						label="Гистограмма"
						value={2}
						sx={{minHeight: tabHeight, height: tabHeight}}
					/>
				</Tabs>

				<TabPanel
					value={state}
					index={0}
					id="table"
				>
					<ChartTable />
				</TabPanel>

				<TabPanel
					value={state}
					index={1}
					id="chart"
				>
					<CrossPlot />
				</TabPanel>
			</Box>
		</Box>
	)
}
