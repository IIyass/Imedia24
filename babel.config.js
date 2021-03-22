module.exports = {
  comments: false,
  presets: [["@babel/preset-env",{
    "useBuiltIns": "entry"
  }], ["@babel/preset-react"]],
  plugins: [
      "@babel/plugin-syntax-dynamic-import",
      ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
  ignore: ["node_modules"]
};