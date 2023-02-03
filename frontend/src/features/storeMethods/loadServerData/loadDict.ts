import { Dispatch } from "redux";
import { dataActions } from "../../../entities/store";
import { getRequest } from "../../../shared";
import { dictionaryType } from "../../../entities/store";

function createDictionary (data:any):dictionaryType {
	const tables: dictionaryType = {};

	for (let row of data) {
		if (!(row.table_name in tables)) {
			tables[row.table_name] = {
				tableName: row.table_desc,
				columns: {
					[row.column_name]: {
						columnName: row.column_desc,
						editable: row.editable
					}
				}
			}
		} else {
			tables[row.table_name].columns = {
				...tables[row.table_name].columns,
				[row.column_name]: {
					columnName: row.column_desc,
					editable: row.editable
				}
			}
		}
	}
	return(tables);
}



export const loadDict = () => {
	return async (dispatch: Dispatch) => {
		try {
			const responce = await getRequest('core/getdicttables')
			const dict = createDictionary(responce.data)
			dispatch({type: dataActions.UPDATE_DICT_TABLES, payload: dict})
		} catch (error) {
			console.log(error)
		}
	}
}