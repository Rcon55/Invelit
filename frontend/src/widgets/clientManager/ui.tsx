import { IconButton, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import {v4 as uuid} from 'uuid';
import { useTypedSelector } from '../../entities';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export const GroupList:React.FC = () => {
	const groups = useTypedSelector(state => state.data.groups)
	return (
		<div>

			{groups.map(item => 
				<ListItem key={uuid()}
					secondaryAction={
						<IconButton aria-label="delete">
							<DeleteForeverIcon />
						</IconButton>}
				>
					<ListItemText
						primary={item['name']}
						secondary={item['description']} 
					/>

				</ListItem>
			)}
		</div>
	)
}
