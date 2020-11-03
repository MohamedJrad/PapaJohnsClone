module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		defaultLineHeights: true,
		standardFontWeights: true
	},
	purge: [],
	theme: {
		minHeight: {
			'3/4': '75vh',
			full: '100%',
			screen: '100vh'
		},
		boxShadow: {
			outline: '0 0 0 3px rgb(221, 70, 70)'
		},
		extend: {
			spacing: {
				'72': '18rem',
				'84': '21rem',
				'96': '24rem',
				'100': '30rem',
				'200': '40rem',
				'700': '70vh',
				'1/2': '50vh',
				'1/4': '25vh',
				'1/3': '33.333%',
				'2/3': '66.666%',
				'3/4': '75vh',
				'1/2': '50vh'
			}
		}
	},
	variants: {
		backgroundColor: [ 'responsive', 'hover', 'focus', 'active' ]
	},
	plugins: []
};
