const React = require('react');
const Def = require('../default');

function edit_form(data) {
    return(
        <Def>
            <main>
                <h1>Edit {data.place.name}</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className='row'>
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" value={data.place.name} required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" id="pic" name="pic" value={data.place.pic} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">Place City</label>
                            <input className="form-control" id="city" name="city" value={data.place.city} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">Place State</label>
                            <input className="form-control" id="state" name="state" value={data.place.state} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="foods">Place Foods</label>
                            <input className="form-control" id="foods" name="foods" value={data.place.cuisines} required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="founded">Founded Year</label>
                            <input className="form-control" id="founded" name="founded" value={data.place.founded} required />
                        </div>
                        <input className="btn btn-primary" type="submit" value="Update Place" />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form;