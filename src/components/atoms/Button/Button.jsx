import { Icon } from '../Icon/Icon'
import { Text } from '../Text/Text.style'
import { Button } from './Button.style'



export const PrimaryButton = ({
	icon,
	text,
	onClick,
	background,
	color,
}) => {
	return (
		<Button
			onClick={onClick}
			background={background}
			color={color}
		>
			{icon && <Icon icon={icon} />}
			{text && <Text weight='600'>{text}</Text>}
		</Button>
	)
}
