import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import globalCss from '@/theme/globalCss'
import tokens from '@/theme/tokens'
import recipes from '@/theme/recipes'
import slotRecipes from '@/theme/slotRecipes'
import { textStyles } from '@/theme/textStyles'

const config = defineConfig({
	globalCss,
	theme: {
		tokens,
		textStyles,
		recipes,
		slotRecipes,
	},
})

export default createSystem(defaultConfig, config)
