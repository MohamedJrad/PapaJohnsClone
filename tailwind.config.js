module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
		// defaultLineHeights: true,
		// standardFontWeights: true
	},
	purge: [],
	theme: {
		boxShadow: {
			outline: '0 0 0 3px rgb(221, 70, 70)'
		},
		extend: {
			spacing: {
				'72': '18rem',
				'84': '21rem',
				'96': '24rem',
				'100': '30rem',
				'1/3': '33.333%',
				'2/3': '66.666%'
			}
		}
	},
	variants: {
		backgroundColor: [ 'responsive', 'hover', 'focus', 'active' ]
	},
	plugins: []
};
