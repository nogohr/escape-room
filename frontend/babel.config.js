module.exports = {
  presets: ["module:react-app"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": "./components",
          "@views": "./views",
          "@assets": "./assets",
          "@helpers": "./helpers",
          "@store": "./store",
          "@actions": "./actions",
          "@reducers": "./reducers",
          "@root": "./"
        }
      }
    ]
  ]
};
