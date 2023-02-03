import * as React from 'react';
import { withProviders } from './providers';
import { Routing } from '../pages';


const App = () => {
	return(
		<div>
			<Routing />
		</div>
	)
}

export default withProviders(App);