const express = require('express')
const app = express()

// VARIABLE CONFIG
const dotenv = require('dotenv').config()
const API_NAME = process.env.API_NAME
const API_PASS = process.env.API_PASS
const API_URL = process.env.API_URL
const PORT = process.env.PORT || 3000


// PREVENT CORS
const cors = require('cors')
app.use(cors())


// AUTHORIZE
const headers = new Headers()
headers.append('Authorization', 'Basic ' + Buffer.from(`${API_NAME}:${API_PASS}`).toString('base64'))


// FORWARD REQUEST FROM FE TO EXTERNAL API
// make request to http://localhost:PORT/?url=url/to/be/forwarded?param1=value1&param2=value2
// this route will forward the request to external api and then send the response back

app.get('/', (req, res) => {
    const { query } = req
    console.log('Forwarding url:', query.url)

    fetch(`${API_URL}/${query.url}`, {
        method: 'GET',
        headers: headers
    })
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data)
            res.send(data)
        })
})


// START SERVER
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})