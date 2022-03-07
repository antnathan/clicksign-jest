module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
};
