import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
	className: '',
	base: {
		display: 'inline-flex',
		appearance: 'none',
		alignItems: 'center',
		justifyContent: 'center',
		userSelect: 'none',
		position: 'relative',
		borderRadius: 'xs',
		whiteSpace: 'nowrap',
		verticalAlign: 'middle',
		cursor: 'pointer',
		flexShrink: '0',
		outline: 'none !important',
		isolation: 'isolate',
		fontWeight: 400,
		transitionProperty: 'common',
		transitionDuration: 'moderate',
		focusVisibleRing: 'outside',
		_icon: {
			boxSize: '1.4rem',
			flexShrink: '0',
		},
	},
	variants: {
		size: {
			sm: {
				'--button-size': '4.4rem',
				height: 'var(--button-size)',
				minWidth: 'var(--button-size)',
				textStyle: 'body3_bold',
			},
		},
		variant: {
			solid: {
				color: 'system.white',
				bg: 'linear-gradient(150deg, rgba(255,128,114,1) 20%, rgba(255,160,36,1) 80%)',
				boxShadow: '5px 4px 0 0 rgba(255, 255, 255, 0.12) inset, 0px 4px 0px 0px rgba(231, 96, 0, 0.78)',
				'&:hover, &:active, &[data-active="true"]': {
					bg: 'linear-gradient(150deg, rgba(255,128,114,1) 20%, rgba(255,160,36,1) 80%) !important',
				},
			},
		},
	},
	defaultVariants: {
		variant: 'solid',
		size: 'sm',
	},
})
