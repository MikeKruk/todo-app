/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Inter'],
		},
		screens: {
			'max-lg': { max: '1024px' },
			'max-md': { max: '768px' },
			'max-sm': { max: '640px' },
			'max-430': { max: '430px' },
			'max-390': { max: '390px' },
		},
		animation: {
			typing: 'typing 2s steps(30, end)',
		},
		keyframes: {
			typing: {
				'0%': { width: '0%' },
				'100%': { width: '100%' },
			},
		},
	},
	plugins: [],
};
