import { GridColumns } from "@mui/x-data-grid"

export const prepareHeader = (	table: any,
								dict: any,
								): GridColumns<any> => {
	let columns = []

	for (let col of Object.keys(table[0])) {
		if (Object.keys(dict.columns).includes(col)) {
			columns.push({
				field: col,
				// type: 'string',
				hide: dict.columns[col].name === 'PK' ? true : false,
				headerName: dict.columns[col].name,
				editable: false,
				flex: 0,
			})
		}
	}
	return(columns)
}