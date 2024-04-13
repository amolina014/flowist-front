import styled from 'styled-components';
import { addAlphaToColor } from '../../../util/color';


export const Button = styled.button.withConfig({
	shouldForwardProp: prop => !['background', 'color', 'hover', 'colorWithAlpha'].includes(prop)
}).attrs(props => ({
	colorWithAlpha: (props.color && addAlphaToColor(props.color)) || props.theme.colors.text,
	hover: (props.color && addAlphaToColor(props.color, 'e3')) || props.theme.colors.hover
}))`
	padding: .5rem ;
	background-color: ${props => props.background || props.theme.colors.button.default};
	color: ${props => props.colorWithAlpha};

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	gap: .75rem;

	border-radius: .5rem;

	cursor: pointer;

	transition: color .3s ease;

	&:hover{
		color: ${props => props.hover};
	}
`
const style = style => {
	return Object.keys(style).map(eachKey => `${eachKey}: ${style[eachKey]};`).join('');
}
export const StyledButton = styled(Button).withConfig({
	shouldForwardProp: prop => !['style'].includes(prop),
})`
	${props => props.style && style(props.style)}
`