import styled from 'styled-components'
import { InputContainerBase } from '../Input.style'


export const TextBasedInputContainer = styled(InputContainerBase)`
	border-bottom: 2px solid ${props => props.theme.colors.inputBackground};
`


export const TextBasedInputStyle = styled.input`
	outline: none;
	width: 100%;
`