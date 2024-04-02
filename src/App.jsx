import { PrimaryButton } from './components/atoms/Button/Button'
import { H1, Heading } from './components/atoms/Heading/Heading'
import { AddIcon } from './components/atoms/Icon/Icon'
import { Tag } from './components/atoms/Tag/Tag'
import { Text } from './components/atoms/Text/Text.style'
import { GlobalStyle } from './styles/GlobalStyle'
import { Theme } from './styles/Theme'

function App() {
	return (
		<Theme>
			<GlobalStyle />
			<H1 title='Hello World' />
			<Text>hola que tal esto es una prueba</Text>
			<Tag color='#d05392'>Tag 1</Tag>
			<Tag>Tag 2</Tag>

			<PrimaryButton
				icon={<AddIcon />}
				text='Primary Btn'
			/>

		</Theme>
	)
}

export default App
