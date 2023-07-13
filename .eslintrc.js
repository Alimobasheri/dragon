module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['tailwind.config.js', '.eslintrc.js', 'next.config.js', 'postcss.config.js'],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/semi': ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    curly: ['error', 'all'],
    'func-style': ['error', 'expression'],
    'function-paren-newline': ['off'],
    'arrow-parens': ['error', 'as-needed'],
    'id-length': [
      'error',
      {
        exceptions: ['p', 'q'],
        properties: 'never',
      },
    ],
    'import/extensions': ['error', 'never', { json: 'always', svg: 'always', png: 'always' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }],
    'no-alert': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-new': 'off',
    'no-multiple-empty-lines': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-globals': ['error', 'event'],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
      {
        selector: 'CallExpression[arguments.length=1][callee.property.name="reduce"]',
        message:
          'Missing initial value when calling `Array.prototype.reduce`. `TypeError` will be thrown if the array is empty.',
      },
    ],
    'object-curly-newline': 'off',
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: { '&&': 'after', '||': 'after', '=': 'after', '+': 'after' },
      },
    ],
    quotes: [2, 'single', { avoidEscape: true }],
    'space-before-function-paren': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // Detect react version
      'import/resolver': {
        'node': {
          'paths': ['src/'],
        },
      },
    },
  },
};
