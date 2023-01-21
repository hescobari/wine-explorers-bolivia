import {Routes, Route} from 'react-router-dom';
import {Page, Header, Body, Box, Text, Button} from 'crack-ux';

// Pages
import {Home} from '../../pages/Home';

// Styles
import './Public.css';

const Public = () =>
{
	return (
		<Page class='public'>
			<Header class='header fixed right'>
				<Box class='logo float-left left'>
					<Text class='block uppercase primary' size={20}>Wine Explorers</Text>
					<Text class='block uppercase primary' size={20}>Bolivia</Text>
				</Box>
				<Box class='menu' style={{marginTop: 5}}>
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

export {Public};