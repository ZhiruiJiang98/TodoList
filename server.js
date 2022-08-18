const express = require('express')
const app = express()
const PATH = require('path')
const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    req.sendFile(PATH.resolve(__dirname, 'build', 'index.html'))
  })
}

app.listen(PORT, err => {
  if (err) return console.log(err)
  console.log('Server running on port:', PORT)
})
