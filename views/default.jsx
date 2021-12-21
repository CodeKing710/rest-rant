const React = require('react');
const { default: ScriptTag } = require('react-script-tag/lib/ScriptTag');

function Def(html) {return (
    <html>
        <head>
            <title>Title</title>
            <link rel="stylesheet" href="/css/main.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
            <ScriptTag src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" />
        </head>
        <body>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/places">Places</a>
                    </li>
                    <li>
                        <a href="/places/new">Add Place</a>
                    </li>
                </ul>
            </nav>
            {html.children}
        </body>
    </html>
)}

module.exports = Def;