import React from 'react';
import {
Nav,
NavLink,
Bars,
Lock,
NavMenu,
} from './navbarElements';

const TopNavbar = () => {
	const style = {
		display: 'flex',
		paddingRight: '0px',
		paddingLeft: '16px',
		webkitBoxAlign: 'center',
		alignItems: 'center',
		transition: 'all 350ms ease',
		fontSize: '15px',
		lineHeight: '18px',
		textDecoration: 'none'
	};

	return (
		<>
		<Nav>
			<Bars />

			<NavMenu>
			<NavLink to='/privacyCenter'>
				Privacy Center
			</NavLink>
			<NavLink to='/support'>
				Support
			</NavLink>
			<NavLink to='/login' style={style}>
				<Lock />Login
			</NavLink>
			</NavMenu>
		</Nav>
		</>
	);
};

export default TopNavbar;