import {Section, Content, Panel, Card, Header, Body, Footer, Form, Text, Button} from 'crack-ux';

const ContactUs = () =>
{
	return (
		<Section class='contact-us section'>
			<Content class='laptop'>
				<Header class='center'>
					<Text class='title'>Contactanos</Text>
				</Header>
				<Panel class='desktop6'>
					<Body>
						<Text type='p'>Cel: </Text>
						<Text type='p'>wineexplorersbolivia@gmail.com</Text>
					</Body>
				</Panel>
				<Panel class='desktop6'>
					<Body>
						<Card>
							<Body>
								<Form
									inputs =
									{[
										{
											name: 'name',
											text: 'Nombre',
											class: 'tablet6',
										},
										{
											name: 'lastName',
											text: 'Apellido',
											class: 'tablet6',
										},
										{
											name: 'phone',
											text: 'Celular',
											class: 'tablet6',
										},
										{
											name: 'email',
											text: 'Email',
											class: 'tablet6',
										},
										{
											name: 'message',
											text: 'Mensaje',
											type: 'textarea',
											rows: 12
										}
									]}
									autoFocus = {false}
								/>
							</Body>
							<Footer class='right'>
								<Button class='background-red-wine white-wine' text='Enviar Mensaje'/>
							</Footer>
						</Card>
					</Body>
				</Panel>
			</Content>
		</Section>
	)
}

export {ContactUs};