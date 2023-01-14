import axios from "axios";
import { Dispatch } from "react";
import { DataActions, dictTablesType, dataActionsType } from "../../types/store"

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

export const fetchDictTables = () => {
	return async (dispatch: Dispatch<dataActionsType>) => {
		try {
			const response = await axios.get('core/getdicttables');
			const dict = prepareDictTables(response.data);
			// console.log(dict)
			dispatch({type: DataActions.UPDATE_DICT_TABLES, data: dict});
		} catch (e) {
			console.log('ERROR_DICT')
		}
	}
}