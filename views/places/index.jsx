const React = require('react');
const Def = require('../default');

function index(data) {
    return(
    <Def>
        <main>
            <div className="row">
                <h1>Places</h1>
                {data.places.map((place) => {return(
                    <div className="col-sm-6" key={place.id}>
                        <h2>
                            <a href={`/places/${place.id}`}>{place.name}</a>
                        </h2>
                        <p className='text-center'>{place.cuisines}</p>
                        <img src={place.pic} alt={place.name} />
                        <p className='text-center'>Located in {place.city}, {place.state}</p>
                    </div>
                )})}
            </div>
        </main>
    </Def>
)}

module.exports = index;