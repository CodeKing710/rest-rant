const React = require('react');
const Def = require('./default');

function error404() {return(
    <Def>
        <main>
            <h1>404: Not Found</h1>
            <p>Couldn't find what you were looking for... Seems to be an ID-10-T Error, look between keyboard and chair for the issue :)</p>
        </main>
    </Def>
)}

module.exports = error404;