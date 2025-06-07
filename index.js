const express = require('express');
const { readHtml } = require('./middleware/readFile');

const app = express()

app.get('/', readHtml, async (req, res) => {
    const {html} = res.locals;
    
    res.set({'content-type' : 'text/html'})
    res.status(200)
    res.send(html)
})

app.listen(3000, () => console.log(`Server is running`))