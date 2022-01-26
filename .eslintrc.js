module.exports = {
	root: true,
	extends: [
		'@react-native-community',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	parser: '@typescript-eslint/parser',
	rules: {
		curly: ['error', 'multi-line'],
		eqeqeq: 0,
		'jsx-quotes': ['error', 'prefer-single'],
		'no-mixed-spaces-and-tabs': 0,
		'object-curly-newline': [
			'off',
			{
				ObjectExpression: 'always',
				ImportDeclaration: 'never',
				ExportDeclaration: 'never',
			},
		],
		'react-native/no-inline-styles': 0,
		'react-native/no-unused-styles': 1,
	},
};
