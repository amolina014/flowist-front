import { useEffect, useId } from 'react';
import { CheckboxContainer, CheckboxStyle, CheckboxWrapper } from './CheckboxInput.style';
import { CheckIcon } from '../../Icon/Icon';


export const CheckboxInput = ({
	name,
	label,
	handleChange,
	data,
}) => {
	const id = useId();

	const onChange = () => handleChange(name, !data[name]);

	useEffect(() => {
		handleChange(name, false);
	}, []);

	return (
		<CheckboxContainer>
			<CheckboxWrapper checked={data[name]}>
				<CheckIcon />
				<CheckboxStyle type="checkbox" id={id} name={name} checked={data[name] || false} onChange={onChange} />
			</CheckboxWrapper>
			{label && <label htmlFor={id}>{label}</label>}
		</CheckboxContainer>
	)
}