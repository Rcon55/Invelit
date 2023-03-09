import React from "react";
import { IconButton, List, ListItem, ListItemText } from "@mui/material"
import {v4 as uuid} from 'uuid';

import ClearIcon from '@mui/icons-material/Clear';


interface DataItemProps {
	labels: {
		x: string,
		y: string,
		z: string,
	},
}

const DataItem = ({ labels }: DataItemProps) => {
	return(
		<ListItem>
			<ListItemText primary={`${labels.x} - ${labels.y} (${labels.z})`} />

			<IconButton>
				<ClearIcon />
			</IconButton>
		</ListItem>
	)
}


interface DataListProps {
	data: any[],
}

export const DataList = ({data}:DataListProps) => {
	return(
		<List sx={{height: '20vh', overflow: 'auto'}}>
			{data.map(item => <DataItem labels={item} key={uuid()}/>)}
		</List>
	)
}