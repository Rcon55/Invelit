import * as React from "react";

export interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

export interface TableSelectorProps {
	list: {[key: string]: {
		name: string
		}};
	onSelect?: (state: string) => void;
	defaultValue?: string;
}

export interface InputBlockProps {
	id: string,
	label: string,
	options: string[],
	getValue?: (field:string, value:any) => any,
	dataFormat?: string,
}