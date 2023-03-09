interface dictRelationsType {
	[key:string]: {
		childs?: {
			[key:string]: {
				[key:string]: string
			}
		},
		parents?: {
			[key:string]: {
				[key:string]: string
			}
		}
	}
}

export const dataRelations: dictRelationsType = {
	"groups": {
		childs: {
			"samples": {"group_id": "group"}
		}
	},
	"samples": {
		childs: {
			"experiments": {"sample_id": "sample"},
		},
		parents: {
			"groups": {"group": "group_id"},
		}
	},
	"experiments": {
		childs: {
			"properties": {"experiment_id": "experiment"}
		},
		parents: {
			"samples": {"sample": "sample_id"},
		}
	},
	"properties": {
		parents: {
			"experiments": {"experiment": "experiment_id"},
		}
	},
}