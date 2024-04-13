import { createContext, useContext, useState } from 'react';


const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children, elementToRender }) => {
	const [isOpen, setIsOpen] = useState(true);
	const close = () => setIsOpen(false);
	const open = () => setIsOpen(true);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<ModalContext.Provider value={{
			isOpen,
			open,
			close,
			toggle,
			elementToRender,
		}}>
			{children}
		</ModalContext.Provider>
	)
}