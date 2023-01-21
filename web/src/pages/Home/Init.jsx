import {Content, Panel, Box, Body, Text} from 'crack-ux';

const Init = () =>
{
	return (
		<Content class='init full-height-v'>
			<Content class='desktop relative' style={{paddingTop: 50}}>
				<Panel class='desktop6 relative full-height'>
					<Box class='full-center full-width' style={{padding: 25}}>
						<Body>
							<Text class='white' type='p' size={18}>Embárquese en un viaje único con <span className='primary'>Wine Explorers Bolivia</span>, donde el turismo y los vinos se unen para ofrecerle una experiencia inolvidable. Descubra las maravillas de la industria del vino boliviana y viva una aventura enológica inigualable</Text>
						</Body>
					</Box>
				</Panel>
				<Panel class='desktop6 relative full-height'>
					<Box class='full-center full-width' style={{padding: 25}}>
						<img className='full-width' src='/assets/red-wine-glass.jpg' alt='red wine glass'/>
					</Box>
				</Panel>
			</Content>
		</Content>
	)
}

export {Init};