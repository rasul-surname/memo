export const sendScore = (score: number): void => {
	fetch('/api/score', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ score }),
	}).catch((err) => console.error('Ошибка отправки счёта:', err))
}
