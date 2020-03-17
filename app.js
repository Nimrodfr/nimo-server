const express = require('express')
const app = express()
const port = 6600

app.get('/', (req, res) => res.send('Hello Nimo!\n'))

app.listen(port, '127.0.0.1', () => console.log(`Example app listening on port ${port}!`))