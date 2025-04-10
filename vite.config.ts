import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default ({ mode }: { mode: any }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

	return defineConfig({
		base: process.env.VITE_BASE_PATH,
		plugins: [react(), tsconfigPaths()],
	})
}
