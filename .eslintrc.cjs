module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  requireConfigFile: false,
  babelOptions: {
    presets: ["@babel/preset-react"],
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: ["airbnb-base"],
  rules: {
    "no-shadow": "off",
    "no-param-reassign": "off",
    "eol-last": "off",
    "import/extensions": [
      1,
      {
        js: "always",
        json: "always",
      },
    ],
  },
  ignorePatterns: ["dist/", "build/"],
};
