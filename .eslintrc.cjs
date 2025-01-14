module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2021
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:storybook/recommended'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      '@typescript-eslint/no-unused-vars': [
        'off',
        {
          argsIgnorePattern: '^_'
        }
      ],
      'prettier/prettier': 'error'
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
          // does not work with type definitions
          'no-unused-vars': 'off'
        }
      },
      {
        files: ['**/__tests__/*.{j,t}s?(x)', 'packages/**/src/**/*.spec.{j,t}s?(x)'],
        env: {
          jest: true
        }
      },
      {
        files: ['packages/**/src/**/*.vue'],
        parser: 'vue-eslint-parser',
        parserOptions: {
          extraFileExtensions: ['.vue'],
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 2021
        },
        extends: ['plugin:vue/vue3-recommended', '@vue/typescript/recommended', 'plugin:prettier/recommended']
      }
    ]
  };