import { FormProvider } from '../../../context/formContext'
import { Heading } from '../../atoms/Heading/Heading'
import { Input } from '../../atoms/Input/Input'
import { Tag } from '../../atoms/Tag/Tag'
import { Text } from '../../atoms/Text/Text.style'
import { Form } from '../Form/Form'
import { TaskThumbFormContainer, TaskThumbItemExtend } from './TaskThumbForm.style'


export const TaskThumbForm = () => {

	return (
		<Form>
			<TaskThumbFormContainer>
				<Input
					name='done'
					type='checkbox'
				/>

				<TaskThumbItemExtend>
					<Heading
						title='Mi primera tarea'
						level='h3'
						style={{
							size: '1em'
						}}
					/>
				</TaskThumbItemExtend>


				<Tag color='#d05392'>Pattern Design</Tag>

				<Text
					size='1em'
				>
					02/04/2024
				</Text>
			</TaskThumbFormContainer>
		</Form>
	)
}