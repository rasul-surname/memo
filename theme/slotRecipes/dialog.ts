import { defineSlotRecipe } from '@chakra-ui/react'
import { dialogAnatomy } from '@chakra-ui/react/anatomy'

export const dialogSlotRecipe = defineSlotRecipe({
	className: 'chakra-dialog',
	slots: dialogAnatomy.keys(),
	base: {
		backdrop: {
			backdropFilter: 'blur(2px)',
		},
		content: {
			padding: 'md',
			bg: 'white',
			m: 0,
			rounded: '1.6rem 1.6rem 0 0',
		},
		body: {
			display: 'flex',
			flexDirection: 'column',
			textStyle: 'body1',
			p: 0,
		},
	},

	variants: {
		placement: {
			bottom: {
				positioner: {
					alignItems: 'flex-end',
				},
				content: {
					'--dialog-base-margin': 'spacing.16',
					mx: 'auto',
				},
			},
		},

		size: {
			sm: {
				content: {
					maxW: '50rem',
				},
			},
		},

		motionPreset: {
			'slide-in-bottom': {
				content: {
					_open: { animationName: 'slide-from-bottom, fade-in' },
					_closed: { animationName: 'slide-to-bottom, fade-out' },
				},
			},
			none: {},
		},
	},

	defaultVariants: {
		size: 'sm',
		placement: 'bottom',
		motionPreset: 'slide-in-bottom',
	},
})
