const React = require('react');
const importScript = require('../importScript');

function Def(html) {return (
    <html>
        <head>
            <title>Title</title>
            <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
            {html.children}
        </body>
    </html>
)}

module.exports = Def;