import { Tab, Tabs } from '@mui/material';
import * as React from 'react'
import AppMenuStoreGenerate from './AppMenuStoreGenerate';
import AppMenuStoreInput from './AppMenuStoreInput';
import { TabPanel } from './../elements/tabs';


export const AppMenuStoreLocal = () => {
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
				<Tab
					component="a"
					value={1}
					label='Ввод'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/>
				<Tab 
					component="a"
					value={2}
					label='Файл'
					sx={{fontSize: "14px", minHeight: "10px"}}
				/>
			</Tabs>

			<TabPanel id={'generate'} value={state} index={0}>
				<AppMenuStoreGenerate/>
			</TabPanel>

			<TabPanel id={'input'} value={state} index={1}>
				<AppMenuStoreInput/>
			</TabPanel>

			<TabPanel id={'file'} value={state} index={2}>
				<p>Загрузка данных из файла</p>
			</TabPanel>
		</div>
	) 
}
