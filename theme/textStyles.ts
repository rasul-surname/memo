import { defineTextStyles } from '@chakra-ui/react'

export const textStyles = defineTextStyles({
	body: {
		value: {
			fontSize: 'md',
			lineHeight: 1.2,
			fontWeight: 400,
		},
	},
	body_light: {
		value: {
			fontSize: 'sm',
			lineHeight: 1.5,
			fontWeight: 300,
		},
	},
	body3_bold: {
		value: {
			fontSize: 'sm',
			lineHeight: 1.2,
			fontWeight: 600,
		},
	},
	title3: {
		value: {
			fontSize: 'md',
			lineHeight: 1.2,
			fontWeight: 500,
		},
	},
})
