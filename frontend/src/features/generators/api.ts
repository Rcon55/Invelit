import { postRequest } from "../../shared/serverAPI/post"
import { GeneratorRequests } from "./models"

export const postGenerator = (model: GeneratorRequests) => {
	switch (model) {
		case (GeneratorRequests.create_samples): {
			postRequest('core/gen/', {model: 'create_samples'})
		}
	}
}