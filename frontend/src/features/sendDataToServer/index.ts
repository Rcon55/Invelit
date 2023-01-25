import { DataRequests } from "./actions"
import { addExperiment, addProperty, addSamples, deleteRequest } from "./requests"

export { DataRequests }

export async function sendToServer (
	requestType: DataRequests, 
	data: any, 
	) {
		switch (requestType) {
			case DataRequests.ADD_SAMPLE: {
				try {
					await addSamples('core/samples/', data)
					return
				} catch (error) {
					return(error)
				}
			}
			case DataRequests.DELETE_SAMPLES: {
				try {
					await deleteRequest('core/samples/', data)
					return
				} catch (error) {
					return(error)
				}
			}
			case DataRequests.ADD_EXPERIMENT: {
				try {
					await addExperiment('core/experiments/', data)
					return
				} catch (error) {
					return(error)
				}
			}
			case DataRequests.DELETE_EXPERIMENTS: {
				try {
					await deleteRequest('core/experiments/', data)
					return
				} catch (error) {
					return(error)
				}
			}
			case DataRequests.ADD_PROPERTIES: {
				try {
					await addProperty('core/properties/', data)
					return
				} catch (error) {
					return(error)
				}
			}
			case DataRequests.DELETE_PROPERTIES: {
				try {
					await deleteRequest('core/properties/', data)
					return
				} catch (error) {
					return(error)
				}
			}
			default: return("ERROR")
		}
}