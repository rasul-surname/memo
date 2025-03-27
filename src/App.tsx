import { useEffect, useState } from 'react'
import './MemoGame.css'

type Card = {
	id: number
	emoji: string
	flipped: boolean
	matched: boolean
}

const levels = [
	{ rows: 2, cols: 3 },
	{ rows: 3, cols: 4 },
	{ rows: 4, cols: 4 }
]

const cardsArray: string[] = ['🚇', '🚉', '🚦', '🚧', '🚏', '🚥', '🚊', '⚠️']
const generateShuffledCards = (rows: number, cols: number): Card[] => {
	const totalPairs = (rows * cols) / 2
	const selectedEmojis = cardsArray.slice(0, totalPairs)

	return [...selectedEmojis, ...selectedEmojis]
		.sort(() => Math.random() - 0.5)
		.map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }))
}

function App() {
	const [cards, setCards] = useState<Card[]>([])
	const [flippedCards, setFlippedCards] = useState<number[]>([])
	const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
	const [score, setScore] = useState<number>(0)
	const [timer, setTimer] = useState<number>(20)
	const [levelIndex, setLevelIndex] = useState<number>(0)

	useEffect(() => {
		if (isGameStarted) {
			const { rows, cols } = levels[levelIndex]
			setCards(generateShuffledCards(rows, cols))
		}
	}, [isGameStarted, levelIndex])

	useEffect(() => {
		if (isGameStarted && timer > 0) {
			const timer = setInterval(() => {
				setTimer((prev: number) => prev - 1)
			}, 1000)

			return () => clearInterval(timer)
		} else if (timer === 0) {
			console.log('отправлен запрос')
			sendScore()
			setIsGameStarted(false)
		}
	}, [isGameStarted, timer])

	useEffect(() => {
		if (cards.length > 0 && cards.every(card => card.matched)) {
			if (levelIndex < levels.length - 1) {
				setLevelIndex(prev => prev + 1)
				setIsGameStarted(true)
				setTimer(20)
			} else {
				console.log('последний уровень пройден')
				setIsGameStarted(false)
				// sendScore()
			}
		}
	}, [cards])

	const handleCardClick = (id: number): void => {
		if (!isGameStarted) return

		if (flippedCards.length === 2 || cards.find(card => card.id === id)?.flipped) return


		const newCards = cards.map(card => card.id === id ? { ...card, flipped: true } : card)
		setCards(newCards)
		setFlippedCards([...flippedCards, id])

		if (flippedCards.length === 1) {
			const firstCard = cards.find(card => card.id === flippedCards[0])
			const secondCard = newCards.find(card => card.id === id)

			if (firstCard && secondCard && firstCard.emoji === secondCard.emoji) {
				setTimeout(() => {
					setCards(prevCards => prevCards.map(card =>
						card.emoji === firstCard.emoji ? { ...card, matched: true } : card
					))
					setScore((prevScore) => prevScore + 10)
					setFlippedCards([])
				}, 500)
			} else {
				setTimeout(() => {
					setCards(prevCards => prevCards.map(card =>
						flippedCards.includes(card.id) || card.id === id ? { ...card, flipped: false } : card
					))

					setFlippedCards([])
				}, 1000)
			}
		}
	}

	const sendScore = (): void => {
		fetch('/api/score', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ score })
		}).catch(err => console.error('Ошибка отправки счёта:', err))
	}

	const handleGameStart = () => {
		setIsGameStarted(true)
		setTimer(20)
		setScore(0)
		setLevelIndex(0)
	}

	return (
		<div className="wrapper">
			{!isGameStarted ? (
				<button className="button-restart" onClick={handleGameStart}>
					НАЧАТЬ ИГРУ
				</button>
			) : (
				<>
					<div className="game-info">
						<div className="level">Уровень: {levelIndex + 1} / {levels.length}</div>
						<div className="timer">⏳ {timer}</div>
						<div className="score">Очки: {score}</div>
					</div>
					<div className="memo-game"
						 style={{ gridTemplateColumns: `repeat(${levels[levelIndex].cols}, 80px)` }}>
						{cards.map(card => (
							<div
								key={card.id}
								className={`card ${card.flipped || card.matched ? 'flipped' : ''}`}
								onClick={() => handleCardClick(card.id)}
							>
								<div className="card-inner">
									<div className="card-front"></div>
									<div className="card-back">{card.emoji}</div>
								</div>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default App
