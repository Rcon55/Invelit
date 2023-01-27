import { postRequest } from "../../shared"

export const sendGeneratorModel = (props: any) => {
	const parameters = {
		model: 'create_fes',
		group_name: props.group,
		number_of_samples: props.samples_num,
	}
	postRequest('core/gen/', parameters) 
}