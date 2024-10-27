import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
   pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
   pluginReact.configs.flat.recommended,
   { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
   {
      plugins: {
         'simple-import-sort': simpleImportSort,
      },
      settings: {
         react: {
            version: 'detect',
         },
      },
      languageOptions: {
         globals: {
            ...globals.browser,
            ...globals.node,
         },
      },
      rules: {
         'react/jsx-uses-react': 'off',
         'react/react-in-jsx-scope': 'off',
         'simple-import-sort/imports': 'error',
         'simple-import-sort/exports': 'error',
         'no-undef': 'off',
         '@typescript-eslint/no-require-imports': 'off',
      },
   },
];
