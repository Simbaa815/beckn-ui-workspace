import '@testing-library/jest-dom'


module.exports = {
  // other configurations...
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

