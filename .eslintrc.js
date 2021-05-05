/* eslint-disable prettier/prettier */
module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "plugin:prettier/recommended",
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "camelcase": "off",
    },
};