module.exports = {
  assert: 'code',
  coverage: true,
  threshold: 85,
  lint: true,
  coverageExclude:["test","node_modules"],
  colors: true,
  output: "/reports/coverage",
  reporter: "html",
  seed: true,
  shuffle:true
};