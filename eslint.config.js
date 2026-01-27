// eslint.config.js
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginUnusedImports from 'eslint-plugin-unused-imports';

import configPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            react: pluginReact,
            'react-hooks': pluginReactHooks,
            prettier: pluginPrettier,
            'unused-imports': pluginUnusedImports,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...pluginReact.configs.flat.recommended.rules,

            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],

            // ✅ Prettier formatting errors as ESLint errors
            'prettier/prettier': 'error',

            // 🟢 Syntax Optimization
            'max-len': [
                'warn',
                { code: 100, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreUrls: true },
            ],
            quotes: ['error', 'single', { avoidEscape: true }],
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-arrow-callback': 'error',
            'arrow-body-style': ['error', 'as-needed'],
            semi: ['error', 'always'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'always'],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],

            // 🟠 Code Quality
            eqeqeq: ['error', 'always'],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['warn'],

            // 🔴 React
            'react/react-in-jsx-scope': 'off',
            'react/jsx-key': 'error',
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
            'react/jsx-indent': [2, 4],
            indent: [2, 4],
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'warn',
            'react/jsx-no-target-blank': 'warn',

            // ✅ React Hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
    },
    configPrettier, // 🧼 Turn off conflicting formatting rules
    {
        ignores: ['**/dist/**'],
    },
];
