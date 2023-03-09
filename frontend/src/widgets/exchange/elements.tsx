import { IconButton, List, ListItem, ListItemText, ListSubheader } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid';

import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';

import { getServerGroupsList } from './requests';
import { sendGroupPackToServer } from './actions';
import { useAppDispatch, useTypedSelector } from '../../entities';
import { loadDataset, loadDict } from '../../features';
import { useSnackbar } from 'notistack';


export const DownloadGroup = () => {
	const [serverGroups, setServerGroup] = useState([]);
	const dispatch = useAppDispatch();
	const { enqueueSnackbar } = useSnackbar();

	async function load (dataset: string) {
		const status = await dispatch(loadDataset(dataset));
		if (status === true) {
			enqueueSnackbar('Данные загружены', {variant: 'success'})
		} else {
			enqueueSnackbar('Данные не загружены', {variant: 'error'})
		}
	}

	useEffect(() => {
		getServerGroupsList(setServerGroup) 
		dispatch(loadDict())
	}, [])

	return(
		<List
			sx={{width: '100%'}}
		>
			<ListSubheader component="div">
				Наборы данных на сервере:
			</ListSubheader>

			{	!serverGroups ? false : serverGroups.map(item => 
				<ListItem key={uuid()}
					secondaryAction={
						<IconButton aria-label="download"
							onClick={() => load(item['id'])}
							>
							<DownloadIcon />
						</IconButton>
					}
				>
					<ListItemText 
						primary={`${item['name']} (${item['id']})`}
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
			<ListSubheader component="div">
				Наборы данных в локальном хранилище:
			</ListSubheader>

			{	!clientGroups ? false : 
				clientGroups.map(item => 

				<ListItem key={uuid()}
					secondaryAction={
						<IconButton aria-label="upload"
							onClick={() => sendGroup(item['group_id'])}
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
