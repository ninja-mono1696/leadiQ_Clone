import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar/navbar';
import PrivacyCenter from './privacyCenter';
import Support from './support';
import Login from './login';
import BookDemo from './bookDemo';
import SignUp from './signup';
import IPD from './identify_Prospect_Data';
import SP from './salesProfessionals';
import SL from './salesLeaders';
import RO from './revenueOps';
import Marketing from './marketing';

const AllRoutes = () => {
    return (
        <>
			<TopNavbar />
	        <Routes>
		        <Route path='/privacyCenter' component={PrivacyCenter} />
		        <Route path='/support' component={Support} />
		        <Route path='/login' component={Login} />
				<Route path='/bookDemo' component={BookDemo} />
				<Route path='/signup' component={SignUp} />
				<Route path='/identify_Prospect_Data' component={IPD} />
				<Route path='/salesProfessionals' component={SP} />
				<Route path='/salesLeaders' component={SL} />
				<Route path='/revenueOps' component={RO} />
				<Route path='/marketing' component={Marketing} />
	        </Routes>
	    </>
    )
}

export default AllRoutes;