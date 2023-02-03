import { Tab, Tabs } from '@mui/material';
import React from 'react'
import { TabPanel } from '../../../../shared/components/tabs';
import { GeneratorsTab } from '../../../../widgets/generator';



export const Load = () => {
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
				textColor='secondary'
				indicatorColor='secondary'
				sx={{minHeight: "10px"}}
			>
				<Tab
					component="a"
					value={0}
					label='Генератор'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/>
				{/* <Tab
					component="a"
					value={1}
					label='Ручная коррекция'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/> */}
				{/* <Tab 
					component="a"
					value={2}
					label='Файл'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/> */}
			</Tabs>

			<TabPanel id={'generate'} value={state} index={0}>
				<GeneratorsTab/>
			</TabPanel>

			{/* <TabPanel id={'input'} value={state} index={1}>
				<InputTab/>
			</TabPanel> */}

			{/* <TabPanel id={'file'} value={state} index={2}>
				<p>Загрузка данных из файла</p>
			</TabPanel> */}
		</div>
	) 
}
 