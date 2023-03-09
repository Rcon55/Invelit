import { getTable } from "../getTable"

export const getValue = (tableName:string, field:string, value: number | string, filterField?:string) => {
	const table = getTable(tableName);
	for (let row of table) {
		if (row[field] === value) {
			if (!filterField) {
				return row
			} else {
				return row[filterField]
			}
		}
	}
}

export const getAllValues = (tableName:string, field:string, value: number, filterField?:string) => {
	const result = [];
	const table = getTable(tableName);
	for (let row of table) {
		if (row[field] === value) {
			if (!filterField) {
				result.push(row)
			} else {
				result.push(row[filterField])
			}
		}
	}
	return(result)
}
