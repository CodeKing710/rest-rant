const React = require('react');
const Def = require('../default');

function index(data) {
    return(
    <Def>
        <main>
            <h1>Places</h1>
            {data.places.map((place,index) => {return(
                <div key={index}>
                    <h2>{place.name}</h2>
                    <img src={place.pic} alt={place.name} />
                </div>
            )})}
        </main>
    </Def>
)}

module.exports = index;