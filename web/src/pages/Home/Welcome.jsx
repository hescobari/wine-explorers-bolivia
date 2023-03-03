import {Section, Content, Panel, Header, Body, Footer, Text, Image} from 'crack-ux';

const Welcome = () =>
{
	return (
		<Section class='welcome section'>
			<Content class='laptop'>
				<Panel class='message desktop6'>
					<Header class='no-border'>
						<Text class='capitalize secondary bold' type='p'>Bienvenido a nuestra página web de turismo enológico en Bolivia.</Text>
					</Header>
					<Body>
						<Text class='capitalize' type='p'>Aquí podrá descubrir las maravillas de la industria del vino en nuestro país, desde los viñedos más impresionantes hasta los vinos más exclusivos.</Text>
					</Body>
					<Body>
						<Text class='capitalize' type='p'>Ofrecemos una amplia variedad de opciones de turismo, desde visitas guiadas a bodegas bolivianas hasta degustaciones de vinos locales y cenas con maridaje de vinos bolivianos.</Text>
					</Body>
					<Body>
						<Text class='capitalize' type='p'>Nuestros expertos en vinos le guiarán a través de la historia y la cultura del vino en Bolivia, mientras disfruta de las mejores etiquetas de la región.</Text>
					</Body>
					<Footer>
						<Text class='capitalize gold' type='p'>¡Comience su viaje enológico en Bolivia con nosotros hoy mismo!</Text>
					</Footer>
				</Panel>
				<Panel class='image desktop6'>
					<Image src='/assets/event.jpg'/>
				</Panel>
			</Content>
		</Section>
	)
}

export {Welcome};