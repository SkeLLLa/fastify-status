module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
  },
  extends: ['plugin:prettier/recommended', 'eslint:recommended'],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/__mocks__/**/*.js'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      ...require('eslint-plugin-jest').configs.recommended,
    },
  ],
  rules: {
    'new-cap': ['error', { capIsNewExceptions: ['ObjectId', 'Fastify'] }],
    'max-len': [
      'error',
      {
        code: 80,
        comments: 999,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};
