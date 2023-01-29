import {Section, Content, Panel, Card, Header, Body, Footer, Form, Text, Button} from 'crack-ux';

const ContactUs = () =>
{
	return (
		<Section class='contact-ux section'>
			<Content class='laptop'>
				<Panel>
					<Card>
						<Header>
							<Text>Contactanos</Text>
						</Header>
						<Body>
							<Form
								inputs =
								{[
									{
										name: 'name',
										text: 'Nombre',
									},
									{
										name: 'lastName',
										text: 'Apellido',
									},
									{
										name: 'phone',
										text: 'Nombre',
									},
									{
										name: 'email',
										text: 'Nombre',
									},
									{
										name: 'message',
										text: 'Mensaje',
										type: 'textarea'
									}
								]}
							/>
						</Body>
						<Footer>
							<Button text='Enviar Mensaje'/>
						</Footer>
					</Card>
				</Panel>
			</Content>
		</Section>
	)
}

export {ContactUs};