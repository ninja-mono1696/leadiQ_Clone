import { FaBars, FaLock } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
padding: 20px 24px;
position: relative;
z-index: 10;
`;

export const NavLink = styled(Link)`
padding-right: 16px;
padding-left: 16px;
transition: all 350ms ease;
font-size: 15px;
line-height: 18px;
text-decoration: none;
color: #dae2e3;
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const Lock = styled(FaLock)`
margin-right: 8px;
font-family: Fontello, sans-serif;
color: #00d586;
`;

export const NavMenu = styled.div`
display: flex;
max-width: 1225px;
margin-right: auto;
margin-left: auto;
padding-right: 24px;
padding-left: 24px;
-webkit-box-pack: end;
justify-content: flex-end;
-webkit-box-align: center;
align-items: center;
@media screen and (max-width: 768px) {
	display: none;
}
`;