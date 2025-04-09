import { Box, Grid, GridProps } from '@chakra-ui/react'
import MemoFrontCard from '@/src/components/cards/MemoFrontCard.tsx'
import MemoBackCard from '@/src/components/cards/MemoBackCard.tsx'
import { CardProps } from '@/src/types/Card.ts'

interface BoardProps extends GridProps {
	cards: CardProps[]
	handleCardClick: (id: number) => void
}

export default function Board({ cards, handleCardClick, ...props }: BoardProps) {
	return (
		<Grid
			{...styles.wrapper}
			{...props}
		>
			{cards.map(({ id, flipped, matched, emoji }) => (
				<Box
					key={id}
					onClick={() => handleCardClick(id)}
					css={styles.containerCards}
				>
					<Box
						css={{
							transform: flipped || matched ? 'rotateY(180deg)' : 'initial',
							...styles.cardFlip,
						}}
					>
						<MemoFrontCard {...styles.card} />
						<MemoBackCard
							css={{
								transform: 'rotateY(180deg)',
								...styles.card,
							}}
						>
							{emoji}
						</MemoBackCard>
					</Box>
				</Box>
			))}
		</Grid>
	)
}

const styles = {
	wrapper: {
		display: 'grid',
		templateColumns: 'repeat(4, 1fr)',
		gap: '1rem',
		p: '1rem',
		bg: 'rgba(255,255,255, 0.6)',
		rounded: '1rem',
	},
	containerCards: {
		position: 'relative',
		w: '8rem',
		h: '8rem',
		cursor: 'pointer',
		perspective: '1000px',
	},
	cardFlip: {
		w: 'full',
		h: 'full',
		position: 'absolute',
		transformStyle: 'preserve-3d',
		transition: 'transform 0.3s ease-in-out',
	},
	card: {
		position: 'absolute',
		backfaceVisibility: 'hidden',
		w: 'full',
		h: 'full',
	},
}
