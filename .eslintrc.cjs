module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:@web-bee-ru/base',
    'plugin:@web-bee-ru/react',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
