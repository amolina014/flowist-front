import { useState } from 'react';


export const useFormLogic = () => {
	const [formData, setFormData] = useState({});

	const handleSubmit = e => {
		e.preventDefault();

		//TODO: Llamar a la API con la info del formulario
		console.log(formData);
	}

	const updateFormData = (key, value) => {
		setFormData({ ...formData, [key]: value });
	}

	return {
		formData,
		updateFormData,
		handleSubmit,
	}
}