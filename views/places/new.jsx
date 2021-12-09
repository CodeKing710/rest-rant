const React = require('react');
const Def = require('../default');

function new_form() {
    return(
        <Def>
            <main>
                <h1>Add a new place</h1>
                <form method="POST" action="/places">
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input id="pic" name="pic" />
                    </div>
                    <div>
                        <label htmlFor="city">Place City</label>
                        <input id="city" name="city" />
                    </div>
                    <div>
                        <label htmlFor="state">Place State</label>
                        <input id="state" name="state" />
                    </div>
                    <div>
                        <label htmlFor="foods">Place Foods</label>
                        <input id="foods" name="foods" required />
                    </div>
                    <input type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    );
}

module.exports = new_form;