import styled, { css } from 'styled-components'
import { InputContainerBase } from '../Input.style'


export const CheckboxContainer = styled(InputContainerBase)`
	cursor: pointer;
	padding: 0;
	& > label {
		cursor: inherit;
		user-select: none;
	}
`

export const CheckboxWrapper = styled.div.withConfig({
	shouldForwardProp: prop => !['checked'].includes(prop)
})`
	position: relative;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	
	${props => props.checked
		? css`
			border: 1px dashed ${props => props.theme.colors.correct};
			color: ${props => props.theme.colors.correct};
		`
		: css`
			border: 1px dashed ${props => props.theme.colors.inputBackground};
			color: ${props => props.theme.colors.inputBackground};
		`
	}
	&:hover {
		${props => !props.checked && css`
			border: 1px dashed ${props => props.theme.colors.inputBackgroundHover};
			color: ${props => props.theme.colors.inputBackgroundHover};
		`}
	}
`

export const CheckboxStyle = styled.input`
	position: absolute;
	z-index: 9;
	top: -2px;
	left: -2px;
	width: calc(100% + 4px);
	height: calc(100% + 4px);

	opacity: 0;
	cursor: pointer;
`