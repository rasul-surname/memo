'use client'

import { createIcon } from '@chakra-ui/react'

export default createIcon({
	displayName: 'MetroLogoIcon',
	path: (
		<>
			<g filter="url(#a)">
				<path
					fill="url(#b)"
					d="M-.01.188h33.02v39.623H-.01V.188Z"
				/>
				<path
					fill="#fff"
					d="m14.595 37.92 1.897 1.891 11.65-11.616a16.35 16.35 0 0 0 4.816-11.597c0-9.063-7.37-16.41-16.458-16.41C7.41.188.042 7.535.042 16.598c0 4.524 1.843 8.634 4.804 11.587.253.251.584.399.96.399.739 0 1.338-.597 1.338-1.334 0-.374-.163-.716-.412-.964a13.669 13.669 0 0 1-4.018-9.688c0-7.577 6.183-13.741 13.782-13.741 7.6 0 13.785 6.164 13.785 13.74 0 3.791-1.547 7.226-4.043 9.714L14.595 37.92Z"
				/>
				<path
					fill="#fff"
					d="M19.129 19.835v1.596h6.359v-1.596H24.25L20.04 9.222l-3.549 6.197-3.545-6.197-4.213 10.613H7.501v1.596h6.358v-1.596h-.952l.927-2.647 2.658 4.366 2.662-4.366.927 2.647h-.952Z"
				/>
			</g>
			<defs>
				<pattern
					id="b"
					width={1}
					height={1}
					patternContentUnits="objectBoundingBox"
				>
					<use
						xlinkHref="#c"
						transform="scale(.00137 .00114)"
					/>
				</pattern>
				<filter
					id="a"
					width={34.34}
					height={40.943}
					x={-0.01}
					y={0.188}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood
						floodOpacity={0}
						result="BackgroundImageFix"
					/>
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset
						dx={1.321}
						dy={1.321}
					/>
					<feComposite
						in2="hardAlpha"
						operator="out"
					/>
					<feColorMatrix values="0 0 0 0 0.834585 0 0 0 0 0.259766 0 0 0 0 0.184321 0 0 0 1 0" />
					<feBlend
						in2="BackgroundImageFix"
						result="effect1_dropShadow_4001_13792"
					/>
					<feBlend
						in="SourceGraphic"
						in2="effect1_dropShadow_4001_13792"
						result="shape"
					/>
				</filter>
				<image
					xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtwAAANxCAYAAADXXG7tAAAABHNCSVQICAgIfAhkiAAACdtJREFU"
					id="c"
					width={732}
					height={881}
					preserveAspectRatio="none"
				/>
			</defs>
		</>
	),
	viewBox: '0 0 35 42',
})
