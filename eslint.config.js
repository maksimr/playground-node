module.exports = {
  'languageOptions': {
    'parser': require('@typescript-eslint/parser'),
    'globals': {
      'process': 'readonly',
      'require': 'readonly',
      'module': 'readonly',
      'console': 'readonly',
    }
  },
  'rules': {
    'no-undef': 'error',
    'semi': 'error',
    'no-unused-vars': 'error',
    'quotes': [
      'error',
      'single'
    ]
  },
  'ignores': [
    '.vscode/**',
    'dist/**',
    'node_modules/**'
  ]
};