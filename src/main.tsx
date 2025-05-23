import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@/src/components/ui/provider.tsx'
import App from '@/src/App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider>
			<App />
		</Provider>
	</StrictMode>,
)
