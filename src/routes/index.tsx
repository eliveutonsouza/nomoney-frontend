import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home } from "../pages"

export default function RoutesComponent() {
	return (
		<Router>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</Router>
	)
}

