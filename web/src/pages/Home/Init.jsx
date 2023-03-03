import {Section, Content, Panel, Body, Text} from 'crack-ux';

const Init = () =>
{
	return (
		<Section class='init full-height-v'>
			<Content class='desktop' style={{paddingTop: 50}}>
				<Panel class='hello tablet6 relative'>
					<Body>
						<Text class='white' type='p'>Embárquese en un viaje único con <span className='primary'>Wine Explorers Bolivia</span>, donde el turismo y los vinos se unen para ofrecerle una experiencia inolvidable. Descubra las maravillas de la industria del vino boliviana y viva una aventura enológica inigualable</Text>
					</Body>
				</Panel>
				<Panel class='video-container tablet6 center relative'>
					<Body class='video'>
						<video controls>
							<source src="/videos/video1.mp4" type="video/mp4"/>
						</video>
					</Body>
				</Panel>
			</Content>
		</Section>
	)
}

export {Init};