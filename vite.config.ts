import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslint from 'vite-plugin-eslint'
// https://vitejs.dev/config/

export default ({ mode }: { mode: string }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

	return defineConfig({
		base: process.env.VITE_BASE_PATH,
		plugins: [
			react(),
			tsconfigPaths(),
			eslint({
				throwOnError: false,
				throwOnWarning: false,
			}),
		],
	})
}
