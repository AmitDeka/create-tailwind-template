module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 13,
    },
    rules: {
        'linebreak-style': 0,
        'no-console': 0,
    },
};
