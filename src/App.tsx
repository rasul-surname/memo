import { useEffect, useState } from 'react'
import './MemoGame.css'

type Card = {
	id: number;
	emoji: string;
	flipped: boolean;
	matched: boolean;
};

const cardsArray: string[] = ['🚇', '🚉', '🚦', '🚧', '🚏', '🚥', '🚊', '⚠️']
const shuffledCards: string[] = [...cardsArray, ...cardsArray].sort(() => Math.random() - 0.5)

function App() {
	const [cards, setCards] = useState<Card[]>(shuffledCards.map((emoji, index) => ({
		id: index,
		emoji,
		flipped: true,
		matched: false
	})))

	const [lives, setLives] = useState(30)
	const [isGameWon, setIsGameWon] = useState(false)
	const [isGameLost, setIsGameLost] = useState(false)
	const [countdown, setCountdown] = useState(5)

	useEffect(() => {
		if (countdown > 0) {
			const timer = setInterval(() => {
				setCountdown(prev => prev - 1)
			}, 1000)
			return () => clearInterval(timer)
		} else {
			setCards(prevCards => prevCards.map(card => ({ ...card, flipped: false })))
		}
	}, [countdown])

	useEffect(() => {
		if (cards.every(card => card.matched)) {
			setIsGameWon(true)
		}

		// Проверка на поражение
		if (lives === 0) {
			setIsGameLost(true)
		}
	}, [cards, lives])

	const [flippedCards, setFlippedCards] = useState<number[]>([])

	const handleCardClick = (id: number) => {
		if (lives === 0 || flippedCards.length === 2 || cards.find(card => card.id === id)?.flipped) return

		const newCards = cards.map(card =>
			card.id === id ? { ...card, flipped: true } : card
		)

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
				}, 500)
			} else {
				setLives(prevLives => {
					if (prevLives === 1) {
						return 0
					}
					return prevLives - 1
				})
				setTimeout(() => {
					setCards(prevCards => prevCards.map(card =>
						flippedCards.includes(card.id) || card.id === id ? { ...card, flipped: false } : card
					))
				}, 1000)
			}
			setFlippedCards([])
		}
	}

	const handleRestart = () => {
		setCards(shuffledCards.map((emoji, index) => ({
			id: index,
			emoji,
			flipped: true,
			matched: false
		})))
		setLives(3)
		setIsGameWon(false)
		setIsGameLost(false)
		setCountdown(5)
	}

	return (
		<div className="wrapper">
			<div className="lives">❤️ {lives}</div>
			{countdown > 0 ? (
				<div className="countdown">⏳ До начала игры: {countdown}</div>
			) : null}
			{!isGameWon && !isGameLost ? (
				<div className="memo-game">
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
			) : null}

			{isGameWon && (
				<div className="banner">
					<h2>Поздравляем, вы выиграли! 🎉</h2>
					<button className="button-restart" onClick={handleRestart}>Начать заново</button>
				</div>
			)}

			{isGameLost && (
				<div className="banner">
					<h2>Игра окончена! Вы проиграли. 😢</h2>
					<button className="button-restart" onClick={handleRestart}>Начать заново</button>
				</div>
			)}
		</div>
	)
}

export default App
