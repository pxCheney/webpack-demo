module.exports = html => {
  console.log('HTML-LOADER', html)
  return `export default ${JSON.stringify(html)}`
}
