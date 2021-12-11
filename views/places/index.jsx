const React = require('react');
const Def = require('../default');

function index(data) {
    return(
    <Def>
        <main>
            <h1>Places</h1>
            {data.places.map((place) => {return(
                <div key={place.id}>
                    <h2>
                        <a href={`/places/${place.id}`}>{place.name}</a>
                    </h2>
                    <img src={place.pic} alt={place.name} />
                </div>
            )})}
        </main>
    </Def>
)}

module.exports = index;