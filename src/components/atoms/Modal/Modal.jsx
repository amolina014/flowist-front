import styled from 'styled-components'
import { media } from '@styles/breakpoints'
import { ButtonWithStyle } from '../Button/Button'
import { CloseIcon } from '../Icon/Icon'
import { ModalProvider, useModalContext } from '../../../context/modalContext'

const ModalStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: #0000008d;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 1rem;

	z-index: 99;
`
const ModalBox = styled.div`
	position: relative;
	max-width: 600px;
	width: 100%;
	min-height: 300px;
	background-color: ${props => props.theme.colors.background.light};
	border-radius: .5rem;
	padding: 3rem 1rem 1rem;
	
	${media.sm`
		height: 80vh;
		overflow-y: auto;
	`}
`

export const Modal = ({ element }) => {
	return (
		<ModalProvider elementToRender={element}>
			<ModalBase />
		</ModalProvider>
	)
}
const ModalBase = () => {
	const { isOpen, close, elementToRender } = useModalContext();

	const handleClick = e => e.stopPropagation(e)
	return (
		<>
			{isOpen &&
				<ModalStyled onClick={close}>
					<ModalBox onClick={handleClick}>
						<ButtonWithStyle
							onClick={close}
							icon={<CloseIcon
								style={{
									width: '1.5rem',
									height: '1.5rem'
								}}
							/>}
							style={{
								'background-color': 'transparent',
								'position': 'absolute',
								'top': '.5rem',
								'right': '.5rem'
							}}
						/>
						{elementToRender}
					</ModalBox>
				</ModalStyled>
			}
		</>
	)
}