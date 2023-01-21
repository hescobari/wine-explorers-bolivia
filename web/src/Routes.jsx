import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Layouts
import {Public} from "./layouts/Public";

const AppRoutes = () =>
{
	return (
		<BrowserRouter>
			<Routes>
				<Route path='*' element={<Public/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export {AppRoutes as Routes}