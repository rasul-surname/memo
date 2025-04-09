import { defineSlotRecipe } from '@chakra-ui/react'
import { progressAnatomy } from '@chakra-ui/react/anatomy'

export const progressSlotRecipe = defineSlotRecipe({
	className: '',
	slots: progressAnatomy.keys(),
	base: {
		root: {
			position: 'relative',
			bg: 'rgba(255,255,255, 0.6)',
			rounded: 'full',
			p: '1.2rem',
		},
		track: {
			overflow: 'hidden',
			position: 'relative',
		},
		range: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			transitionProperty: 'width, height',
			transitionDuration: 'slow',
			height: '100%',
		},
		valueText: {
			// textStyle: '',
			ml: '2rem',
		},
	},

	variants: {
		variant: {
			outline: {
				track: {
					shadow: 'inset',
					// bgColor: 'red !important',
				},
				range: {
					// bgColor: 'red !important',
					// background: `linear-gradient(to right, red 0%, yellow 50%, green 100%)`,
				},
			},
		},

		shape: {
			rounded: {
				track: {
					borderRadius: 'full',
				},
			},
		},

		striped: {
			true: {
				range: {
					// backgroundImage: `linear-gradient(45deg, yellow 25%, red 25%, green 50%, var(--stripe-color) 50%, red 75%, orange 75%, green)`,
					// backgroundSize: `var(--stripe-size) var(--stripe-size)`,
					// '--stripe-size': '1rem',
					// '--stripe-color': {
					// 	_light: 'rgba(255, 255, 255, 0.3)',
					// 	_dark: 'rgba(0, 0, 0, 0.3)',
					// },
				},
			},
		},

		animated: {
			true: {
				range: {
					'--animate-from': 'var(--stripe-size)',
					animation: 'bg-position 1s linear infinite',
				},
			},
		},

		size: {
			sm: {
				track: { h: '1.2rem' },
			},
		},
	},

	defaultVariants: {
		variant: 'outline',
		size: 'sm',
		shape: 'rounded',
	},
})
