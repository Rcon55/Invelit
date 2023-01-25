import * as React from 'react';
import { Routing } from '../pages';
import { withProviders } from './providers';


const App = () => {
	return(
		<div>
			<Routing />
		</div>
	)
}

export default withProviders(App);