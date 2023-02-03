import { GridColumns } from "@mui/x-data-grid"
import { store } from "../../entities/store"


export const getHeader = (table: string): GridColumns<any> => {
	const dict = store.getState().data.dictionary[table]
	const columns = []

	for (let col of Object.keys(dict.columns)) {
		columns.push({
			field: col,
			hide: dict.columns[col].columnName === 'PK' ? true : false,
			headerName: dict.columns[col].columnName,
			editable: false,
			flex: 1,
		})
	}
	return(columns)
}

export const getIdColumn = (table: string) => {
	const dict = store.getState().data.dictionary[table]
	for (let col of Object.keys(dict.columns)) {
		if (dict.columns[col].columnName === 'PK') {
			return(col)
		}
	}
}