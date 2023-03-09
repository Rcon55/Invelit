import { getIdColumn, getTable } from "../getTable"
import { getAllValues, getValue } from "./getValue"
import { dataRelations } from "./relations"


export const findAllChilds = (table:string, itemID: number) => {

	const recursiveFinder = (table:string, item: number, result:any) => {
		const childs = findChilds(table, item);

		if (childs === false) {
			
		} else {
			for (let child of Object.keys(childs)) {
				if (result[child]) {
					result[child] = Array.from(new Set([...result[child], ...childs[child]]));
				} else {
					result[child] = childs[child];
				}

				for (let item of result[child]) {
					recursiveFinder(child, item, result)
				}
			}
		}
		return result
	}
	const res = {}
	return recursiveFinder(table, itemID, res)
}


export const findChilds = (table:string, itemID: number) => {
	const selection:any = {};
	const relationTable = dataRelations[table].childs;

	if (!relationTable) {
		return false
	}

	for (let child of Object.keys(relationTable)) {
		const childIdField = Object.values(relationTable[child])[0];
		const parentIdField = Object.keys(relationTable[child])[0]

		//Получаем значение внешнего ключа от родителя
		const childId = Number(getValue(table, getIdColumn(table), itemID, parentIdField))

		//Получаем список потомков по значению внешнего ключа
		selection[child] = getAllValues(child, childIdField, childId, getIdColumn(child));
	}

	return(selection);
} 