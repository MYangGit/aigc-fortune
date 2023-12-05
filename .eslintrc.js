module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'eslint-plugin-react'], //定义了该eslint文件所依赖的插件
  env: {
    //指定代码的运行环境
    browser: true,
    node: true,
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': [1, { endOfLine: 'auto', singleQuote: true, trailingComma: 'es5' }],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // 允许使用短路、三目
    'func-names': ['error', 'as-needed'], // 需要时添加函数名称
    'no-param-reassign': ['error', { props: false }], // 函数形参可修改
    'react/jsx-uses-react': 'off', // React 17及以后引入了新的 JSX 编译方式，无须在组件中显式地 import React，可关闭
    'react/react-in-jsx-scope': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    // 限制每行最多的属性数量
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 3,
        when: 'always',
      },
    ],
  },
  // 忽略对某些文件的检查
  ignorePatterns: ['node_modules/', 'build/', 'dist/', 'public/', 'config/', 'scripts/', 'src/electron/'],
};
