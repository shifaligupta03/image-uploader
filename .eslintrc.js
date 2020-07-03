module.exports = {
    extends: [
      "react-app",
      "airbnb",
      "airbnb/hooks"
    ],
    plugins: ["react-hooks"],
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": [
        "warn",
        { "varsIgnorePattern": "React|styles" }
      ],
       "import/prefer-default-export": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react-hooks/rules-of-hooks": "error", 
      "react-hooks/exhaustive-deps": "warn",
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
      "react/jsx-props-no-spreading": 0,
      "react/forbid-prop-types": 0,
      "react/require-default-props":0,
      "consistent-return": 0,
      "no-param-reassign": ["error", { "props": false }],
      "jsx-a11y/label-has-associated-control": 0,
      indent: 2
    },
    "env": {
      "browser": true,
      "node": true,
      "jest": true
    },
};