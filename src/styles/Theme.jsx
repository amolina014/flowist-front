import { ThemeProvider } from 'styled-components';


const theme = {
	colors: {
		button: {
			default: '#333',
			hover: '#2e2e2e',
		},
		inputBackground: '#464646',
		inputBackgroundHover: '#525252',
		correct: '#53d13d',
		background: {
			light: '#2a2a2a',
			normal: '#1e1e1e',
			dark: '#0d0d0d',
		},
		text: '#ffffff9d',
		heading: '#fff',
		enfasis: '#fff',
		hover: '#ffffffe3',
		disable: '#fff',
	},
	fonts: {
		text: 'nunito',
		heading: 'nunito'
	}
};


export const Theme = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}