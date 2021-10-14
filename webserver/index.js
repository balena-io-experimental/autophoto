const express = require('express')
const serveIndex = require('serve-index');
const app = express()
const port = 3000

app.use (express.static('webui/build/'));

// app.get('/', (req, res) => {
//     res.send('Hello')
// })

app.get('/api', (req, res) => {
    res.send('API OK')
})

app.use ('/downloads', express.static('imageoutputs'), serveIndex('imageoutputs'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
