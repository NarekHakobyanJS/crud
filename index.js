const express = require('express');
const { readHtml, readUsers } = require('./middleware/readFile');

const app = express()

app.use(express.static('pages'));

app.get('/', readHtml, async (req, res) => {
    const { html } = res.locals;

    res.set({
        'content-type': 'text/html',
        'cache-control': 'private max-age=10000'

    })

    res.status(200)
    res.send(html)
})

app.get('/api/users', readUsers, async (req, res) => {
    const { users } = res.locals;

    res.set({
        'content-type': 'application/json',
        'cache-control': 'private max-age=10000'

    })
    res.status(200)
    res.json(users)
})

app.post('/api/users', async (req, res) => {
    
})
app.listen(3000, () => console.log(`Server is running`))