import { useEffect } from 'react';
import { TextBasedInputContainer, TextBasedInputStyle } from './TextBasedInput.style';


export const TextBasedInput = ({
	type,
	icon,
	name,
	placeholder,
	handleChange,
	data
}) => {
	const onChange = e => handleChange(name, e.target.value);

	useEffect(() => {
		handleChange(name, '');
	}, [])

	return (
		<TextBasedInputContainer>
			{icon}
			<TextBasedInputStyle
				onChange={onChange}
				type={type}
				name={name}
				value={data[name] || ''}
				placeholder={placeholder}
			/>
		</TextBasedInputContainer>
	)
}