import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReduser } from './redusers/rootReduser';


const store = configureStore({
	reducer: rootReduser,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware()
			.prepend(
				thunk
			)
});

export default store;