import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Page, Header, Body, Box, Button, Icon} from 'crack-ux';

// Pages
import {Home} from '../../pages/Home';

// Context
import {ModalProvider} from '../../contexts/general/Modal';
import {PublicPrivider, usePublic} from '../../contexts/layouts/Public';

// Styles
import './Public.css';

const Public = () =>
{
	const [scrolled, setScrolled] = React.useState(false);

	const pageRef = React.createRef(null);
	
	const {showMenu, setShowMenu} = usePublic();

	React.useEffect(() =>
	{
		const page = pageRef.current;

		const HandleScroll = () =>
		{
			const position = page.scrollTop;
			
			if (position > (window.innerHeight - 112))
			{
				setScrolled(true);
			}
			else
			{
				setScrolled(false);
			}
		}

		page.addEventListener('scroll', HandleScroll);
		
		return () =>
		{
			page.removeEventListener('scroll', HandleScroll);
		};
	}, [pageRef]);

	return (
		<Page reference={pageRef} class='public'>
			<Header class={`header fixed right ${scrolled ? 'scrolled' : ''}`}>
				<Box class='float-left left'>
					<img className='logo' src={`/assets/logo${(scrolled || window.innerWidth < 768) ? '-white' : ''}.png`} alt='Wine Explorers Bolivia'/>
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
		<ModalProvider>
			<PublicPrivider>
				<Public/>
			</PublicPrivider>
		</ModalProvider>
	)
}

export {PublicWithProviders as Public};