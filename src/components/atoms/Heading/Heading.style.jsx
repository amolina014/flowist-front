import styled from 'styled-components';



export const HeadingStyle = styled.h2.withConfig({
	shouldForwardProp: prop => !['size', 'weight', 'color'].includes(prop),
})`
	font-size: ${props => props.size || '2em'};
	font-weight: ${props => props.weight || 600};
	font-family: ${props => props.theme.fonts.heading};
	color: ${props => props.color || props.theme.colors.heading};
`