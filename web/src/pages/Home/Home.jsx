import {Section} from 'crack-ux';

// Components
import {Init} from './Init';
import {Welcome} from './Welcome';

// Styles
import './Home.css';

const Home = () =>
{
	return (
		<Section class='home'>
			<Init/>
			<Welcome/>
		</Section>
	)
}

export {Home};