import { Button, Dialog, DialogRootProps, Portal, Text, VStack } from '@chakra-ui/react'

interface StartGameModalProps extends DialogRootProps {
	handleGameStart: () => void
}

export default function StartGameModal({ handleGameStart, ...props }: StartGameModalProps) {
	return (
		<Dialog.Root
			placement="bottom"
			motionPreset="slide-in-bottom"
			{...props}
		>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content>
						<Dialog.Body>
							<VStack {...props}>
								<Text textStyle="title3">Как играть</Text>
								<Text
									mt=".8rem"
									textStyle="body_light"
									textAlign="center"
								>
									Найдите одинаковые картинки как можно быстрее пока не истечет таймер.
								</Text>
								<Button
									onClick={handleGameStart}
									w="full"
									my="2rem"
								>
									Начать
								</Button>
							</VStack>
						</Dialog.Body>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	)
}
