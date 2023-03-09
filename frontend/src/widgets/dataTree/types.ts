
export interface DataItemProps {
	label: string,
	value: string,
	padding?: number,
	color?: string,
}


export interface NestedGroupProps {
	label: string,
	items: React.ReactNode[],
	expanded: boolean,
	padding?: number,
	color?: string,
}


