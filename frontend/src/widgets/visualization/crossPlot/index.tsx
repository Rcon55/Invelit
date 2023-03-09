import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { TabPanel } from "../../../shared/components/tabs";
import { Axis } from "./axis";
import { GraphicType } from "./graphicType";
import { Values } from "./values";
import { Grid } from "./grid";

export const CrossPlotMenu = () => {
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
					textColor='secondary'
					indicatorColor='secondary'
					sx={{height: '48px'}}
				>
					<Tab
						value={0}
						label='Тип'
						/>
					<Tab 
						value={1}
						label='Оси'
						/>
					<Tab 
						value={2}
						label='Значения'
						/>
					<Tab 
						value={3}
						label='Сетка'
						/>
				</Tabs>
			</Box>
 
			<TabPanel id="chart-panel-type" value={tab} index={0}>
				<GraphicType/>
			</TabPanel>

			<TabPanel id="chart-panel-axis" value={tab} index={1}>
				<Axis/>
			</TabPanel>

			<TabPanel id="chart-panel-values" value={tab} index={2}>
				<Values/>
			</TabPanel>

			<TabPanel id="chart-panel-grid" value={tab} index={3}>
				<Grid/>
			</TabPanel>

		</div>
	)
}
