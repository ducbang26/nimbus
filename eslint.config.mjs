/* eslint-disable import/no-unresolved */
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/first': 'error',
      'react/jsx-props-no-spreading': 'off',
      'unused-imports/no-unused-imports': 'off',
      'react/function-component-definition': 'off',
      'react/destructuring-assignment': 'error',
      'react/require-default-props': 'off',
      'react-hooks/exhaustive-deps': [
        'off',
        {
          additionalHooks: 'useEffect',
        },
      ],
      'no-param-reassign': 'error',
      'react/button-has-type': 'off',
      'react/jsx-no-useless-fragment': 'warn',
      // "react/no-array-index-key": "error",
      'no-return-assign': 'error',
      'react/no-unused-prop-types': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'simple-import-sort/imports': 'off',
      'simple-import-sort/exports': 'off',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'no-promise-executor-return': 'error',
      // "@typescript-eslint/ban-ts-comment": [
      //   "warn",
      //   {
      //     "ts-ignore": "allow-with-description"
      //   }
      // ]
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
