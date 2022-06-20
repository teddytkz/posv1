require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./router/index')

app.use(express.json())
app.use('/', router)

app.listen(PORT, () => console.log(`App Listen on Port ${PORT}`))