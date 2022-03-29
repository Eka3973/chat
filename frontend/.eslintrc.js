module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['@react-native-community', 'plugin:flowtype/recommended'],
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: ['error', 'never'],
  },
}
