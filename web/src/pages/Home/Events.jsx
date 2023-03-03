import {Section, Content, Panel, Card, Header, Body, Footer, Text, Button} from 'crack-ux';
import moment from 'moment';

const today = moment();

const events =
[
	{
		name: 'Wine Padres Tarija',
		date: moment('2023-03-19'),
	},
	{
		name: 'Wine Lovers Tarija',
		date: moment('2023-02-17'),
	},
	{
		name: 'Wine Lovers Tarija',
		date: moment('2023-02-17'),
	},
	{
		name: 'Wine Lovers Tarija',
		date: moment('2023-02-17'),
	},
	{
		name: 'Wine Lovers Tarija',
		date: moment('2023-02-17'),
	},
	{
		name: 'Wine Lovers Tarija',
		date: moment('2023-02-17'),
	},
	{
		name: 'Wine Lovers Tarija',
		date: moment('2023-02-17'),
	},
	{
		name: 'Wine Lovers Tarija',
		date: moment('2023-02-17'),
	},
	{
		name: 'Wine Lovers Tarija',
		date: moment('2023-02-17'),
	},
	{
		name: 'Wine Lovers Tarija',
		date: moment('2023-02-17'),
	},
	{
		name: 'Wine Lovers Tarija',
		date: moment('2023-02-17'),
	},
]

const EventCard = (props) =>
{
	const {name, date} = props;

	const past = date.diff(today) < 0;

	return (
		<Panel class='desktop3'>
			<Card class='event'>
				<Header class={past ? '' : 'background-gold'}>
					<Text>{past ? 'Pasado' : 'Por Venir'}</Text>
				</Header>
				<Header>
					<Text>{name}</Text>
				</Header>
				<Body>

				</Body>
				<Footer class='right'>
					<Button class='background-secondary white-wine' text='Brochure'/>
				</Footer>
			</Card>
		</Panel>
	)
}

const Events = () =>
{
	return (
		<Section class='events section'>
			<Content>
				<Header class='center'>
					<Text class='title'>Eventos</Text>
				</Header>
				<Body>
					<Panel swipe='horizontal'>
						{events.map((event, index) =>
						{
							return <EventCard key={index} {...event}/>
						})}
					</Panel>
				</Body>
			</Content>
		</Section>
	)
}

export {Events};