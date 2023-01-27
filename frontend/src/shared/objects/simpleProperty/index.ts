class SimpleProperty {
	DBname: string
	name: string
	pk: string
	columns: {[colDB: string] : [colName: string]}
	data: any
}