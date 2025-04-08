//@ts-check
import parser from '@typescript-eslint/parser';

/**@type {import('eslint').Linter.Config}*/
const eslintConfig = {
  'languageOptions': {
    'parser': parser,
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

export default eslintConfig;