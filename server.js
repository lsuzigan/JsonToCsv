const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// middlewares
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/index', (req, res) => {
    res.send({
        ...req.body
    })
})

app.listen(8080, () => console.log('Server Started...'))