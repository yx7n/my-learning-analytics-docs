const showdown = require('showdown')
const fs = require('fs')

const converter = new showdown.Converter({completeHTMLDocument: true});
converter.setOption('simpleLineBreaks', true);

const md = fs.readFileSync('assignment-planning.md', 'utf8')

const html = converter.makeHtml(md)

fs.writeFileSync('assignment-planning.html', html)