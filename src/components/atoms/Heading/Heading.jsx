import { HeadingStyle } from './Heading.style';

export const Heading = ({ title, level, style }) => {
	return (
		<HeadingStyle
			as={level}
			{...style}
		>
			{title}
		</HeadingStyle>
	)
}

export const H1 = ({ title }) => {
	return (
		<HeadingStyle
			as='h1'
			size='2.5em'
		>
			{title}
		</HeadingStyle>
	)
}