import styled from 'styled-components'
import { media } from '@styles/breakpoints'
import { calculateFgColorBasedOnBgColor } from '../../../util/color'


export const Tag = styled.span.withConfig({
	shouldForwardProp: prop => !['color'].includes(prop),
}).attrs(props => ({
	color: props.color || '#35cee5',
}))`
	font-weight: 600;
	font-size: 14px;

	background-color: ${props => props.color && props.color + 'b5'};
	color: ${props => calculateFgColorBasedOnBgColor(props.color)};

	/* border: 2px solid ${props => props.color}; */
	-webkit-box-shadow: 0px 0px 0px 2px ${props => props.color};
	-moz-box-shadow: 0px 0px 0px 2px ${props => props.color};
	box-shadow: 0px 0px 0px 2px ${props => props.color};
	border-radius: .5rem;

	margin: 2px;
	padding: .1rem .75rem;
	
	${media.sm`
		font-size: 12px;
	`}
`
// export const Tag = ({ name }) => {
// 	return (
// 		<Text>
// 			{name}
// 		</Text>
// 	)
// }