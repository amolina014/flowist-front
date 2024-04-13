import { createContext, useContext, useEffect, useState } from 'react';
import { useFormLogic } from '../hooks/useFormLogic';


const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
	const {
		formData,
		updateFormData,
		handleSubmit,
	} = useFormLogic();

	useEffect(() => {
		console.log(formData);
	}, [formData])

	return (
		<FormContext.Provider value={{
			formData,
			updateFormData,
			handleSubmit,
		}}>
			{children}
		</FormContext.Provider>
	)
}