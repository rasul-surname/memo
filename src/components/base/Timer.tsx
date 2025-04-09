import { HStack, Progress, ProgressRootProps } from '@chakra-ui/react'

interface TimerProps extends ProgressRootProps {
	value: number
}

export default function Timer({ value, ...props }: TimerProps) {
	return (
		<Progress.Root
			value={value}
			animated={true}
			{...props}
		>
			<HStack>
				<Progress.Track flex="1">
					<Progress.Range />
				</Progress.Track>
				<Progress.ValueText css={{ w: '3rem', textAlign: 'right' }}>{value}</Progress.ValueText>
			</HStack>
		</Progress.Root>
	)
}
