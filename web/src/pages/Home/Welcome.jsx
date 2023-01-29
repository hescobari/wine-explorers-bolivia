import {Section, Content, Box, Header, Body, Footer, Text} from 'crack-ux';

const Welcome = () =>
{
	return (
		<Section class='welcome section'>
			<Content class='laptop'>
				<Box class='content full-width'>
					<Header>
						<img className='full-width' src='/assets/decorative-line.png' alt='decorative line'/>
					</Header>
					<Body style={{padding: '15px 50px'}}>
						<Text class='center capitalize' type='p'>Bienvenido a nuestra página web de turismo enológico en Bolivia. Aquí podrá descubrir las maravillas de la industria del vino en nuestro país, desde los viñedos más impresionantes hasta los vinos más exclusivos. Ofrecemos una amplia variedad de opciones de turismo, desde visitas guiadas a bodegas bolivianas hasta degustaciones de vinos locales y cenas con maridaje de vinos bolivianos. Nuestros expertos en vinos le guiarán a través de la historia y la cultura del vino en Bolivia, mientras disfruta de las mejores etiquetas de la región. ¡Comience su viaje enológico en Bolivia con nosotros hoy mismo!</Text>
					</Body>
					<Footer>
						<img className='full-width' src='/assets/decorative-line.png' alt='decorative line'/>
					</Footer>
				</Box>
			</Content>
		</Section>
	)
}

export {Welcome};