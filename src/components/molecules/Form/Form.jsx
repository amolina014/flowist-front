import { FormProvider, useFormContext } from '../../../context/formContext';
import { PrimaryButton } from '../../atoms/Button/Button';


export const Form = ({ children }) => {
	return (
		<FormProvider>
			<FormBase>
				{children}
			</FormBase>
		</FormProvider>
	)
}
const FormBase = ({ children }) => {
	const { handleSubmit } = useFormContext();
	return (
		<form onSubmit={handleSubmit}>
			{children}
		</form>
	)
}