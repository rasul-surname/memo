import { Box, BoxProps } from '@chakra-ui/react'
import MetroLogoIcon from '@/src/components/icons/MetroLogoIcon.tsx'

export default function MemoFrontCard({ css, ...props }: BoxProps) {
	return (
		<Box
			css={{ ...styles.wrapper, ...css }}
			{...props}
		>
			<MetroLogoIcon boxSize="4rem" />
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
		bg: 'linear-gradient(150deg, rgba(255,95,73,1) 20%, rgba(218,51,28,1) 80%)',
		boxShadow: '3px 3px 0px 2px rgba(255, 255, 255, 0.12) inset, 0px 3px 0px 0px rgba(200, 41, 19, 1)',
		rounded: '1rem',
	} as BoxProps,
}
