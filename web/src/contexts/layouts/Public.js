import React from "react";

const PublicContext = React.createContext();

const PublicPrivider = (props) =>
{
	const [showMenu, setShowMenu] = React.useState(false);

	const value =
	{
		showMenu,
		setShowMenu
	}

	return (
		<PublicContext.Provider value={value} {...props}>
			{props.children}
		</PublicContext.Provider>
	)
}

const usePublic = () => React.useContext(PublicContext);

export {PublicPrivider, usePublic};