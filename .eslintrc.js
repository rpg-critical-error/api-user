/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "camelcase": "off",
        "import/prefer-default-export": "off",
        "prettier/prettier": ["error", {}, {
            "usePrettierrc": true
        }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
};