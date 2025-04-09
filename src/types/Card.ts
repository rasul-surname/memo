import { ReactNode } from 'react'

export interface CardProps {
	id: number
	emoji: ReactNode
	flipped: boolean
	matched: boolean
}
