import { dictTablesType } from "../../entities/store";

export function prepareDictTables (dict: any): any {
	const tables: dictTablesType = {};

	for (let row of dict) {
		if (!(row.TABLE_NAME in tables)) {
			tables[row.TABLE_NAME] = {
				name: row.TABLE_DESC,
				columns: {
					[row.COLUMN_NAME]: {
						name: row.COLUMN_DESC,
						editable: row.EDITABLE
					}
				}
			}
		} else {
			tables[row.TABLE_NAME].columns = {
				...tables[row.TABLE_NAME].columns,
				[row.COLUMN_NAME]: {
					name: row.COLUMN_DESC,
					editable: row.EDITABLE
				}
			}
		}
	}
	return tables;
}