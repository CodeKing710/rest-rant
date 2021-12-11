const React = require('react');
const Def = require('../default');

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <a href={`/places/${data.i}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${data.i}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
            <h2>Rating</h2>
            <p>Unrated</p>
            <h2>Description</h2>
            <p>{data.place.cuisine}</p>
            <h2>Comments</h2>
            <p>None</p>
          </main>
        </Def>
    )
}

module.exports = show;