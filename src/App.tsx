import { useEffect, useState } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { cards as initialCards } from '@/src/constants/cards.tsx'
import { generateShuffledCards } from '@/src/utils/generateShuffledCards.ts'
import { CardProps } from '@/src/types/Card.ts'
import StartGameModal from '@/src/components/modal/StartGameModal.tsx'
import Timer from '@/src/components/base/Timer.tsx'
import Board from '@/src/components/Board.tsx'
import GameInfo from '@/src/components/GameInfo.tsx'
import { sendScore } from '@/src/utils/sendScore.ts'

const GAME_TIME_LIMIT = 50
const TOTAL_LEVELS = 8

function App() {
	const [level, setLevel] = useState(1)
	const [cards, setCards] = useState<CardProps[]>(generateShuffledCards(initialCards))
	const [flippedCards, setFlippedCards] = useState<number[]>([])
	const [isGameStarted, setIsGameStarted] = useState(false)
	const [score, setScore] = useState(0)
	const [timer, setTimer] = useState(GAME_TIME_LIMIT)
	const [isBusy, setIsBusy] = useState(false)

	useEffect(() => {
		if (isGameStarted && timer > 0) {
			const timer = setInterval(() => setTimer((prev) => prev - 1), 1000)

			return () => clearInterval(timer)
		} else if (timer === 0) {
			sendScore(10)
			setIsGameStarted(false)
		}
	}, [isGameStarted, timer])

	useEffect(() => {
		const isWin = cards.every((card) => card.matched)

		if (isWin) {
			if (level < TOTAL_LEVELS) {
				setLevel((prev) => prev + 1)
				setIsGameStarted(true)
				setTimer(GAME_TIME_LIMIT)
			} else {
				console.log('последний уровень пройден')
				setIsGameStarted(false)
				sendScore(score)
			}
		}
	}, [cards, level, score])

	const handleCardClick = (id: number): void => {
		if (isBusy) return
		if (cards.find((card) => card.id === id)?.flipped) return

		const newCards = cards.map((card) => (card.id === id ? { ...card, flipped: true } : card))
		setCards(newCards)

		if (flippedCards.length === 0) {
			setFlippedCards([...flippedCards, id])
		} else if (flippedCards.length === 1) {
			const [firstId] = flippedCards

			const firstCard = cards.find((card) => card.id === firstId)
			const secondCard = cards.find((card) => card.id === id)

			if (!firstCard || !secondCard) return

			setIsBusy(true)

			if (firstCard.emoji === secondCard.emoji) {
				setCards((prevCards) => prevCards.map((card) => (card.emoji === firstCard.emoji ? { ...card, matched: true } : card)))
				setScore((prevScore) => prevScore + 10)
				setFlippedCards([])
				setIsBusy(false)
			} else {
				setTimeout(() => {
					setCards((prevCards) => prevCards.map((card) => ({ ...card, flipped: false })))
					setFlippedCards([])
					setIsBusy(false)
				}, 500)
			}
		}
	}

	const handleGameStart = () => {
		setIsGameStarted(true)
		setTimer(GAME_TIME_LIMIT)
		setScore(0)
		setLevel(1)
	}

	return (
		<Box {...styles.wrapper}>
			<Container variant="limit">
				<Timer value={timer} />
			</Container>
			<StartGameModal
				open={!isGameStarted}
				handleGameStart={handleGameStart}
			/>
			<Board
				cards={cards}
				handleCardClick={handleCardClick}
			/>
			<Box
				css={{
					w: 'full',
					bg: 'white',
					py: '2.4rem',
					rounded: '1.6rem 1.6rem 0 0',
				}}
			>
				<Container variant="limit">
					<GameInfo
						level={level}
						openedCards={cards.filter((card) => card.matched).length / 2}
						totalCards={cards.length / 2}
					/>
				</Container>
			</Box>
		</Box>
	)
}

const styles = {
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		h: '100svh',
		pt: '3rem',
		bg: 'linear-gradient(180deg, rgba(255, 95, 73, 0.84) 0%, rgba(247, 138, 59, 0.32) 38%, rgba(247, 138, 59, 0) 100%)',
	},
}

export default App
