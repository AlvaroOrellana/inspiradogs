const path = require("path");

module.exports = {
  webpack: {
    alias: {
      '@Api': path.resolve(__dirname, "src/api/"),
      '@Assets': path.resolve(__dirname, "src/assets/"),
      '@Components': path.resolve(__dirname, "src/components/"),
      '@Store': path.resolve(__dirname, "src/store/"),
      '@StyledComponents': path.resolve(__dirname, "src/styledComponents/"),
      '@Utils': path.resolve(__dirname, "src/components/Utils/")
    }
  }
}