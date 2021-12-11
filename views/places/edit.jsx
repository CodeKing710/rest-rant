const React = require('react');
const Def = require('../default');

function edit_form(data) {
    return(
        <Def>
            <main>
                <h1>Edit {data.place.name}</h1>
                <form method="POST" action={`/places/${data.i}?_method=PUT`}>
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name="name" value={data.place.name} required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input id="pic" name="pic" value={data.place.pic} />
                    </div>
                    <div>
                        <label htmlFor="city">Place City</label>
                        <input id="city" name="city" value={data.place.city} />
                    </div>
                    <div>
                        <label htmlFor="state">Place State</label>
                        <input id="state" name="state" value={data.place.state} />
                    </div>
                    <div>
                        <label htmlFor="foods">Place Foods</label>
                        <input id="foods" name="foods" value={data.place.cuisines} required />
                    </div>
                    <input type="submit" value="Submit Changes" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form;