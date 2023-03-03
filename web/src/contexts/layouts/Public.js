import React from "react";

// Contexts
import {useModal} from "../general/Modal";

// Views
import {ImagePreview} from "../../components/views/ImagePreview";

const PublicContext = React.createContext();

const PublicPrivider = (props) =>
{
	const [showMenu, setShowMenu] = React.useState(false);

	const {modals, AddModal} = useModal();

	const ShowModalImage = (image) =>
	{
		AddModal(<ImagePreview {...image}/>);
	}

	const value =
	{
		showMenu,
		setShowMenu,
		ShowModalImage
	}

	return (
		<PublicContext.Provider value={value} {...props}>
			{props.children}
			{modals}
		</PublicContext.Provider>
	)
}

const usePublic = () => React.useContext(PublicContext);

export {PublicPrivider, usePublic};