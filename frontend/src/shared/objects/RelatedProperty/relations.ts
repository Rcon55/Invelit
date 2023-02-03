interface dictRelationsType {
	[key:string]: {
		[key:string]: {
			[key:string]: string
		}
	}
}

export const dataRelations: dictRelationsType = {
	"groups": {
		"samples": {"group_id": "group"}
	},
	"samples": {
		"experiments": {"sample_id": "sample"},
		"groups": {"group": "group_id"},
	},
	"experiments": {
		"properties": {"experiment_id": "experiment"},
		"samples": {"sample": "sample_id"},
	},
	"properties": {
		"experiments": {"experiment": "experiment_id"},
	},
}