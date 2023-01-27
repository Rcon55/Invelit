export interface SimplePropertyType {
	DBname: string,
	name: string,
	pk: string,
	columnsName: {[key: string] : [value: string]},
	data: any[]
}