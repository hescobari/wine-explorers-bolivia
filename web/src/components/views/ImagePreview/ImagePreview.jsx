import {Image, Card, Header, Body, Text, Icon} from 'crack-ux';

// Contexts
import {useModal} from '../../../contexts/general/Modal';

// Styles
import './ImagePreview.css';

const ImagePreview = (props) =>
{
	const {name, src, alt} = props;

	const {CloseModal} = useModal();

	return (
		<Card class='image-preview'>
			<Header>
				<Text>Foto {name}</Text>
				<Icon class='icon-cancel pointer float-right' Click={CloseModal}/>
			</Header>
			<Body>
				<Image src={`/gallery/${src}`} alt={alt}/>
			</Body>
		</Card>
	);
}

export {ImagePreview};