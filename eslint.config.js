import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierConfig,
    ],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // 自定义覆盖
      'react-hooks/exhaustive-deps': 'error',
      'prettier/prettier': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              '^vue', // vue放在首行
              // 以字母(或数字或下划线)或“@”后面跟着字母开头的东西,通常为nodeModules引入
              '^@?\\w',
              '^@(/.*|$)', // 内部导入 "@/"
              '^\\.\\.(?!/?$)', // 父级导入. 把 `..` 放在最后.
              '^\\.\\./?$',
              // 同级导入. 把同一个文件夹.放在最后
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
              '^.+\\.?(css|less|scss)$', // 样式导入.
              '^\\u0000', // 带有副作用导入，比如import 'a.css'这种.
            ],
          ],
        },
      ],
    },
  },
);
