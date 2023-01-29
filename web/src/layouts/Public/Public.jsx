import {Routes, Route} from 'react-router-dom';
import {Page, Header, Body, Box, Text, Button, Icon} from 'crack-ux';

// Pages
import {Home} from '../../pages/Home';

// Context
import {PublicPrivider, usePublic} from '../../contexts/layouts/Public';

// Styles
import './Public.css';

const Public = () =>
{
	const {showMenu, setShowMenu} = usePublic();

	return (
		<Page class='public'>
			<Header class='header fixed right'>
				<Box class='logo float-left left'>
					<Text class='block uppercase primary' size={20}>Wine Explorers</Text>
					<Text class='block uppercase primary' size={20}>Bolivia</Text>
				</Box>
				<Box>
					<Icon class={`menu-icon ${showMenu ? 'icon-cancel' : 'icon-menu'}`} size={20} Click={() => setShowMenu(!showMenu)}/>
				</Box>
				<Box class={`menu relative ${showMenu ? 'show' : 'hide'}`}>
					<Button class='uppercase' text='Inicio'/>
					<Button class='uppercase' text='Sobre Nosotros'/>
					<Button class='uppercase' text='Eventos'/>
					<Button class='uppercase' text='Contactenos'/>
				</Box>
			</Header>
			<Body class='no-padding'>
				<Routes>
					<Route path='/' element={<Home/>}/>
				</Routes>
			</Body>
		</Page>
	)
}

const PublicWithProviders = () =>
{
	return (
		<PublicPrivider>
			<Public/>
		</PublicPrivider>
	)
}

export {PublicWithProviders as Public};