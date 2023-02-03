import { IconButton, List, ListItem, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid';

import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';

import { getServerGroupsList } from './requests';
import { sendGroupPackToServer } from './actions';
import { useAppDispatch, useTypedSelector } from '../../entities';
import { loadDataset, loadDict } from '../../features';




export const DownloadGroup = () => {
	const [serverGroups, setServerGroup] = useState([])
	const dispatch = useAppDispatch()

	useEffect(() => {
		getServerGroupsList(setServerGroup)
		dispatch(loadDict())
	}, [])

	return(
		<List
			sx={{width: '100%'}}
		>
			{	!serverGroups ? false : serverGroups.map(item => 
				<ListItem key={uuid()}
					secondaryAction={
						<IconButton aria-label="download"
							onClick={() => dispatch(loadDataset(item['id']))}
							>
							<DownloadIcon />
						</IconButton>
					}
				>
					<ListItemText primary={
						item['name'] + ` (${item['id'] || 'local'})`
					}
					secondary={item['description']} 
					/>

				</ListItem>
			)}
		</List>
	)
}

export const UploadGroup = () => {
	const clientGroups = useTypedSelector(state => state.data.groups)

	const sendGroup = (groupID: number) => {
		sendGroupPackToServer(groupID)
	}

	return (
		<List
			sx={{width: '100%'}}
		>
			{	!clientGroups ? false : 
				clientGroups.map(item => 

				<ListItem key={uuid()}
					secondaryAction={
						<IconButton aria-label="comment"
							// onClick={() => sendGroup(item['group_id'])}
						>
							<UploadIcon/>
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
