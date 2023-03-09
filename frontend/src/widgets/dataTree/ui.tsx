import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { DataItemProps, NestedGroupProps } from "./types";
import { createFullDataTree, dataTreeType } from "../../features/storeMethods/dataTree";
import {v4 as uuid} from 'uuid';


const DataItem = ({label, value, padding, color}: DataItemProps) => {
	return (
		<ListItemButton sx={{ 
				pl: padding, 
				// backgroundColor: color,
		}}>
			<ListItemText 
				primary={label}  
				primaryTypographyProps={{
					fontSize: 14,
					fontWeight: 'medium',
					letterSpacing: 0,
				}} />
			<ListItemText 
				primary={value}  
				primaryTypographyProps={{
					fontSize: 14,
					fontWeight: 'medium',
					letterSpacing: 0,
				}} />
		</ListItemButton>
	)
}


const NestedGroup = ({label, items, expanded, padding, color}: NestedGroupProps) => {
	const [open, setOpen] = React.useState(expanded);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<React.Fragment>
			<ListItemButton 
				onClick={handleClick} 
				sx={{ 
					pl: padding, 
					// backgroundColor:  color, 
				}}
			>
				<ListItemText 
					primary={label} 
					primaryTypographyProps={{
						fontSize: 14,
						fontWeight: 'medium',
						letterSpacing: 0,
				}}/>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>

			<Collapse in={open} timeout="auto" unmountOnExit>
				{items.map(item => item)}
			</Collapse>
		</React.Fragment>
	)
}


export const makeDataTreeComponent = (data: dataTreeType) => {
	const colorTable:any = {
		0: '#FFCDD2',
		1: '#F8BBD0',
		2: '#E1BEE7',
		3: '#D1C4E9',
		4: '#C5CAE9',
		5: '#BBDEFB',
		6: '#B3E5FC',
		7: '#B2EBF2',
		8: '#B2DFDB',
		9: '#C8E6C9',
		10: '#FFECB3',
	}
	let padding = 0;

	function recursiveTree(dataTree: any) {
		let tree: React.ReactNode[] = [];

		for (let child of Object.keys(dataTree)) {
			padding = padding + 2;
			if (dataTree[child].items) {
				tree.push(React.createElement(NestedGroup, {
					label: dataTree[child].name, 
					items: recursiveTree(dataTree[child].items),
					expanded: false,
					padding: padding,
					color: colorTable[padding / 2],
					key: uuid()},
				))
			} else {
				tree.push(React.createElement(DataItem, {
					label: String(dataTree[child].name), 
					value: String(dataTree[child].value), 
					padding: padding,
					color: colorTable[padding / 2],
					key: uuid()}
				))
			}
			padding = padding - 2;
		}
		return(tree);
	}

	return(recursiveTree(data));
}