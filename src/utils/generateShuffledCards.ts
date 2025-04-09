import { ReactNode } from 'react'
import { CardProps } from '@/src/types/Card.ts'

export const generateShuffledCards = (cards: ReactNode[]): CardProps[] => {
	return [...cards, ...cards]
		.sort(() => Math.random() - 0.5)
		.map((emoji, index) => ({
			id: index,
			emoji,
			flipped: false,
			matched: false,
		}))
}
