module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 配置提交类型规范
    'type-enum': [2, 'always', ['#FEAT', '#FIX', '#DOCS', '#STYLE', '#REFACTOR', '#CHORE', '#PERF']],
  },
};
