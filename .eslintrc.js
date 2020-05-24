module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
  },
  extends: ['eslint:recommended', 'google', 'prettier'],
  plugins: ['prettier', 'sort-requires'],
  env: {
    node: true,
    es6: true,
    jest: false,
  },
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/__mocks__/**/*'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      ...require('eslint-plugin-jest').configs.recommended,
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    'sort-requires/sort-requires': 'off',
  },
};
