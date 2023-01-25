import * as React from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux'
// import { Login } from './components/accounts/login';
// import App from './components/App';
import App from './app'
// import store from './store/store';
 

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	// <React.StrictMode>
	// 	<BrowserRouter>
	// 		<Provider store={store}>
	// 			<Routes>
	// 				<Route path="/login/" element={<Login/>} />
	// 				<Route path="/" element={<App/>} />
	// 			</Routes>
	// 		</Provider>
	// 	</BrowserRouter>
	// </React.StrictMode> 
	<App />
);