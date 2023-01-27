import { dictTablesType } from "../../entities/store";

export function prepareDictTables (dict: any): any {
	const tables: dictTablesType = {};

	for (let row of dict) {
		if (!(row.table_name in tables)) {
			tables[row.table_name] = {
				name: row.table_desc,
				columns: {
					[row.column_name]: {
						name: row.column_desc,
						editable: row.editable
					}
				}
			}
		} else {
			tables[row.table_name].columns = {
				...tables[row.table_name].columns,
				[row.column_name]: {
					name: row.column_desc,
					editable: row.editable
				}
			}
		}
	}
	return tables;
}