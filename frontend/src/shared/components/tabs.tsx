import { Box } from "@mui/system";
import * as React from "react";

interface TabPanelProps {
	children: React.ReactNode,
	value: number,
	index: number,
	id: string,
	height?: string,
}

export const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, id, height} = props;
	
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${id}`}
			aria-labelledby={`tabpanel-${id}`}
		>
			{value === index && (
				<Box sx={{ 
					p: 0,
					width: '100%',
					height: height,
				}}>
					{children}
				</Box>
			)}
		</div>
	);
}
