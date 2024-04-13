import { useState } from 'react'
import { PrimaryButton } from './components/atoms/Button/Button'
import { H1, Heading } from './components/atoms/Heading/Heading'
import { AddIcon } from './components/atoms/Icon/Icon'
import { Input } from './components/atoms/Input/Input'
import { Modal } from './components/atoms/Modal/Modal'
import { Tag } from './components/atoms/Tag/Tag'
import { Text } from './components/atoms/Text/Text.style'
import { Form } from './components/molecules/Form/Form'
import { TaskThumbForm } from './components/molecules/TaskThumbForm/TaskThumbForm'
import { GlobalStyle } from './styles/GlobalStyle'
import { Theme } from './styles/Theme'

function App() {
	return (
		<Theme>
			<GlobalStyle />

			<Modal />
			<H1 title='Hello World' />
			<Text>hola que tal esto es una prueba</Text>
			<Tag color='#d05392'>Tag 1</Tag>
			<Tag>Tag 2</Tag>

			<PrimaryButton
				icon={<AddIcon />}
				text='Primary Btn'
			/>

			<TaskThumbForm />
		</Theme>
	)
}

export default App
