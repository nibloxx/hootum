const plugin = require('tailwindcss/plugin');

module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
		'./src/assets/fonts/**/*.{ttf,woff,woff2,eot,otf}',
	],
	prefix: '',
	theme: {
		screens: {
			sm: '320px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1650px',
		},
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			gridTemplateColumns: {
				'7.6-4.4': '7.6fr 4.4fr', // Custom grid template
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
				primary: ['metropolis', 'sans-serif'],
				secondary: ['roboto', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				theme: {
					primary: '#FCAF30',
					secondary: '#333333',
					gray: '#F5F5F5',
					linkColor: '#1877F2',
					textPrimary: '#23262F',
					lightGray: '#D3D3D3',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				webkit: 'var(--radius)',
			},
			width: {
				'webkit-fill-available': '-webkit-fill-available',
			},
			boxShadow: {
				custom: '-1px 5px 13px 5px rgba(231, 227, 227, 0.68)',
			},
			textShadow: {
				custom: '0px 2px 4px rgba(0, 0, 0, 0.3)', // Your custom text shadow
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('autoprefixer'),
		plugin(function ({ addUtilities, theme }) {
			addUtilities(
				{
					'.text-shadow-custom': {
						textShadow: theme('textShadow.custom'), // Linking custom text shadow
					},
				},
				['responsive', 'hover']
			);
		}),
	],
};
