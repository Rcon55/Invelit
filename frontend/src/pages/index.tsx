import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './loginPage/index'
import { WorkPage } from './workPage'

export const Routing = () => {
	return (
		<Routes>
			<Route path="/login/" element={<LoginPage/>} />
			<Route path="/" element={<WorkPage/>} />
		</Routes>
	)
}

