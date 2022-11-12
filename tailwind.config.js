module.exports = {
	purge: [
		'./src/components/**/*.js',
		'./pages/**/*.js'],
	theme: {
		extend: {
			spacing:{
				'11px': '11px'
			}
		},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}