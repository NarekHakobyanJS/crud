const fs = require('fs').promises;
const path = require('path');

const createPath = (...arg) => path.join(__dirname, '..', arg.join(',').replaceAll(',', '/'))

const readHtml = (req, res, next) => {
    fs.readFile(createPath('pages', 'index.html'), 'utf-8')
        .then((data) => {
            res.locals.html = data
            next()
        })
}


const readUsers = (req, res, next) => {
    fs.readFile(createPath('db', 'users.json'), 'utf-8')
        .then((data) => {
            res.locals.users = JSON.parse(data)
            next()
        })
}

module.exports = {
    readHtml,
    readUsers
}