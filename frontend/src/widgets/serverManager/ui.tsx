import { IconButton, List, ListItem, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deleteServerGroup, getServerGroupsList } from './requests'
import {v4 as uuid} from 'uuid';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const ServerGroupsList = () => {
	const [serverGroups, setServerGroup] = useState([])

	useEffect(() => {
		getServerGroupsList(setServerGroup)
	}, [])

	const deleteGroup = (key:string) => {
		deleteServerGroup(key)
		getServerGroupsList(setServerGroup)
	}

	return (
		<List
			sx={{width: '100%'}}
		>
			{	!serverGroups ? false : serverGroups.map(item => 
				<ListItem key={uuid()}
					secondaryAction={
						<IconButton aria-label="delete"
							onClick={() => deleteGroup(item['id'])}
						>
							<DeleteForeverIcon />
						</IconButton>
					}
				>
					<ListItemText 
						primary={item['name']}
						secondary={item['description']} 
					/>

				</ListItem>
			)}
		</List>
	)
}
