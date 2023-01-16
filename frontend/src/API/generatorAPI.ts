import axios from "axios"

export enum genAPIrequests {
	create_samples = 'create_samples',
}

export const genPostAPI = (model: genAPIrequests, properties:any) => {
	switch (model) {
		case (genAPIrequests.create_samples): {
			try {
				axios.post('core/gen/', {model: 'create_samples'})
			} catch (error) {
				console.log(error)
				return(error)
			}
		}
	}
}