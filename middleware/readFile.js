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

module.exports = {
    readHtml
}