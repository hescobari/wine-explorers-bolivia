import {Section} from 'crack-ux';

// Components
import {Init} from './Init';
import {Welcome} from './Welcome';
import {ContactUs} from './ContactUs';
import {Events} from './Events';
import {Gallery} from './Gallery';
import {EndPage} from './EndPage';

// Styles
import './Home.css';

const Home = () =>
{
	return (
		<Section class='home'>
			<Init/>
			<Welcome/>
			<Events/>
			<Gallery/>
			<ContactUs/>
			<EndPage/>
		</Section>
	)
}

export {Home};