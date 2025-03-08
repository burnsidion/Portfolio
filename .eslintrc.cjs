module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'vue/no-multiple-template-root': 'off',
    semi: ['error', 'always'],
    'vue/html-indent': ['error', 2],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: { max: 1, allowFirstLine: false },
      },
    ],
  },
};
