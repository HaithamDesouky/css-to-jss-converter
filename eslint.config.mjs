import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ['dist', 'build', 'node_modules'],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        React: 'writable',
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      import: eslintPluginImport,
      jsxA11y: eslintPluginJsxA11y,
      '@typescript-eslint': eslintPluginTs,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
]
