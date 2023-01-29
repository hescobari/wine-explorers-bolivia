import {Section} from 'crack-ux';

// Components
import {Init} from './Init';
import {Welcome} from './Welcome';
import {ContactUs} from './ContactUs';

// Styles
import './Home.css';

const Home = () =>
{
	return (
		<Section class='home'>
			<Init/>
			<Welcome/>
			<ContactUs/>
		</Section>
	)
}

export {Home};