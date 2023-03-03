import React from "react";
import {Box, Modal} from 'crack-ux';

const ModalContextList = {default: React.createContext({})};

const ModalProvider = (props) =>
{
	const [modals, setModals] = React.useState([]);

	if(!ModalContextList[props.id])
	{
		ModalContextList[props.id] = React.createContext({});
	}

	const AddModal = React.useCallback((Component) =>
	{
		setModals(current => [...current, Component]);
	}, []);

	const CloseModal = () =>
	{
		const cloneModals = [...modals];

		cloneModals.pop();

		setModals(cloneModals);
	}
	
	const modalsContent = modals.map((Component, key) =>
	{
		return <Modal key={key} show={true}>
					<Box class='full-center'>
						{Component}
					</Box>
				</Modal>
	});

	const value =
	{
		AddModal,
		CloseModal,
		modals: modalsContent
	}

	const Component = ModalContextList[props.id];

	return (
        <Component.Provider value={value}>
            {props.children}
        </Component.Provider>
	);
}

ModalProvider.defaultProps =
{
	id: 'default'
};

const useModal = (id = 'default') => React.useContext(ModalContextList[id]);

export {ModalProvider, useModal};