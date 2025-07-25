module.exports = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['use'],
      },
    ],
    'color-hex-length': 'long',
    'selector-class-pattern': null,
  },
};
