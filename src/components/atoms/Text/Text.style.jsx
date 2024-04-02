import styled, { css } from 'styled-components';
import { media } from '../../../styles/breakpoints';

const defaultTextSize = () => {
	return css`
		${media.md`
			font-size: 16px;
		`}
		${media.sm`
			font-size: 12px;
		`}
	`
}

export const Text = styled.p.withConfig({
	shouldForwardProp: prop => !['size', 'weight'].includes(prop)
})`
	font-size: ${props => props.size || defaultTextSize()};
	font-weight: ${props => props.weight || 'normal'};
`