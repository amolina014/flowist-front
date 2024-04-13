import { useFormContext } from '@context/formContext'
import { TextBasedInput } from './TextBasedInput/TextBasedInput'
import { CheckboxInput } from './CheckboxInput/CheckboxInput'

const inputComponent = {
	text: TextBasedInput,
	password: TextBasedInput,
	number: TextBasedInput,
	checkbox: CheckboxInput,
}

export const Input = ({ type, ...props }) => {
	const { formData, updateFormData } = useFormContext();
	const InputComponent = inputComponent[type];

	if (!InputComponent) return <></>

	const handleChange = (name, value) => {
		updateFormData(name, value);
	}

	return (
		<InputComponent
			type={type}
			handleChange={handleChange}
			data={formData}
			{...props}
		/>
	)
}





