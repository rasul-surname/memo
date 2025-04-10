import { defineRecipe } from '@chakra-ui/react'

export const containerRecipe = defineRecipe({
	className: '',
	base: {
		position: 'relative',
		w: 'full',
		mx: 'auto',
		px: 'xl',
	},
	variants: {
		variant: {
			limit: {
				maxW: '40rem',
			},
			full: {
				maxW: 'full',
			},
		},
	},
	defaultVariants: {
		variant: 'full',
	},
})
