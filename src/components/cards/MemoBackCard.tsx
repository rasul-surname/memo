import { Box, BoxProps } from '@chakra-ui/react'

export default function MemoBackCard({ children, css, ...props }: BoxProps) {
	return (
		<Box
			css={{ ...styles.wrapper, ...css }}
			{...props}
		>
			{children}
		</Box>
	)
}

const styles = {
	wrapper: {
		w: '7rem',
		h: '7rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		bg: 'white',
		boxShadow: '0px 3px 0px 0px rgba(216, 216, 216, 1)',
		rounded: '1rem',
	} as BoxProps,
}
