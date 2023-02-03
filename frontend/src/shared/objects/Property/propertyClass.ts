
interface columnsType {
	[DBname:string]: {
		name: string,
		editable?: boolean,
	}
}

export const emptyProperty = () => {
	return(new Property([], 'empty'))
}

export class Property {
	DBname: string
	name: string
	data: any[]
	pk: string
	columns: columnsType
	dict: any

	constructor (data:Object[], DBname:string) {
		this.DBname = DBname
		this.data = data
		this.dict = {}
		this.name = ''
		this.columns = {}
		this.pk = ''
	}

	init (dict:any) {
		this.dict = dict
		this.name = dict.tableName
		this.columns = {}
		for (let col of Object.keys(this.dict.columns)) {
			this.columns[col].name = this.dict.col[col].columnName

			if (this.dict.columns[col].columnName === 'PK') {
				this.pk = col
			}
		}
	}
	concat (obj:Property) {
		//Возвращает тот же объект, если конкатенация производится с пустым объектом
		if (this.DBname === 'default') {
			return(obj)
		}

		if (obj.DBname === this.DBname) {
			this.data.concat(this.data, obj.data)
		}
	}

}