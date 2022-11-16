module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        quotes: ["error", "double"],
        "@typescript-eslint/quotes": ["error", "double"],
        "no-unused-vars": "off",
        "spaced-comment": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "jsx-ally/control-has-associated-label": "off",
        "import/extenstions": [
            "error",
            "ignorePackages",
            {js: "never", jsx: "never", ts: "never", tsx: "never"}
        ]
    },
}
