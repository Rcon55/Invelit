import { postRequest } from "../../../shared";
import { DatasetHeaderType, ExponentialModelProperties } from "../types";


export async function sendExpModRequest(header:DatasetHeaderType, payload:ExponentialModelProperties) {
	console.log(header)
	const responce = await postRequest('core/gen/',
		{
			model: 'exponential',
			dataset: header.name,
			description: header.comment,
			number_of_samples: payload.numberOfSamples,
			settings: payload,
		}
	)
	console.log(responce)
}
