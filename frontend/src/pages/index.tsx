import React from 'react'
import { Route, Routes,  Navigate } from 'react-router-dom'
import { LoginPage } from './loginPage/index'
import SignUp from './registration'
import { WorkPage } from './workPage'
import { useTypedSelector } from '../entities'


export const Routing = () => {
	const token = useTypedSelector(state => state.setup.token)
	return (
		<Routes>
			<Route path="login/" element={<LoginPage/>} />
			<Route path="registration/" element={<SignUp/>} />
			<Route path="/" element={
				token === '' ?
				<Navigate to={'login/'} /> :
				<WorkPage/>
			} />
		</Routes>
	)
}