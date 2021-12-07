const React = require('react');

function Def(html) {return (
    <html>
        <head>
            <title>Title</title>
            {async () => {let bs = await fetch('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');eval(bs);console.log('Grabbed bs');}}
            <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
            {html.children}
        </body>
    </html>
)}

module.exports = Def;