const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())

app.get('/*', (req, res) => {
  console.log('VARAMA')
  res.json({ data: 'data' })
})

module.exports = app
