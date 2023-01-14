import { useTypedSelector } from "../../hooks/typedHooks"


export const getDataFromStore = (table_name:string) => {
	switch (table_name.toLowerCase()) {
		case "samples": {
			return(useTypedSelector(store => store.data.samples))
		}
		case "properties": {
			return(useTypedSelector(store => store.data.properties))
		}
		default: {
			return([])
		}
	}
}