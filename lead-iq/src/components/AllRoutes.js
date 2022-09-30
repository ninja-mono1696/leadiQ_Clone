import React from 'react';
import TopNavbar from './TopNavbar/navbar';
import { Routes, Route } from 'react-router-dom';
import PrivacyCenter from '../pages/privacyCenter';
import Support from '../pages/support';
import Login from '../pages/login';
import BookDemo from '../pages/bookDemo';

const AllRoutes = () => {
    return (
        <>
			<TopNavbar />
	        <Routes>
		        <Route path='/privacyCenter' component={PrivacyCenter} />
		        <Route path='/support' component={Support} />
		        <Route path='/login' component={Login} />
				<Route path='/bookDemo' component={BookDemo} />
	        </Routes>
	    </>
    )
}

export default AllRoutes;