// express server
const express = require('express');
const app = express();
const port = 3000;


// get request
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port || 3000, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})