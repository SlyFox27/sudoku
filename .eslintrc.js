module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 0,
    'operator-linebreak': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'object-curly-newline': 0,
  },
};
