import { Box, BoxProps, Button } from '@chakra-ui/react'
import PauseIcon from '@/src/components/icons/PauseIcon.tsx'

interface GameInfoProps extends BoxProps {
	level: number
	openedCards: number
	totalCards: number
}

export default function GameInfo({ level, openedCards, totalCards, ...props }: GameInfoProps) {
	return (
		<Box
			{...styles.wrapper}
			{...props}
		>
			<Button>
				<PauseIcon boxSize="1.2rem" />
			</Button>
			<Button css={{ flex: 1 }}>Уровень {level}</Button>
			<Button css={{ w: '8.4rem' }}>
				{openedCards} / {totalCards}
			</Button>
		</Box>
	)
}

const styles = {
	wrapper: {
		display: 'flex',
		gap: '1.2rem',
	},
}
