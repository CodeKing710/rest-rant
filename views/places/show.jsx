const React = require('react');
const Def = require('../default');

function show (data) {
  let comments = (<h3 className="inactive">No Comments Yet!</h3>);
  let rating = (<h3 className="inactive">Not Rated Yet!</h3>);

  if(data.place.comments.length) {
    //Adjust ratings
    let sumRatings = data.place.comments.reduce((tot,c) => {
      return tot + c.stars;
    }, 0);
    let avgRating = Math.round(sumRatings/data.place.comments.length);
    let stars = '';

    for(let i = 0; i < avgRating; i++)
      stars += '⭐️'

    rating = (<h3>{stars} stars</h3>)
    //Adjust comments
    comments = data.place.comments.map(comment => {
      return (<div className="border" key={data.place.comments.id}>
        <h2 className="rant">{comment.rant ? 'Rant!':'Rave!'}</h2>
        <h4>{comment.content}</h4>
        <h3><strong>- {comment.author}</strong></h3>
        <h4>Rating: {comment.stars}</h4>
      </div>)
    })
  }

  //Output
  return (
    <Def>
      <main>
        <div className="row" key="1">
          <h1>{data.place.name}</h1>
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <h2>Rating</h2>
          {rating}
          <div className='col-sm-6'>
            <h2>
              Description
            </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
          </div>
          <div>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
          </div>
          <hr />
          <h2>Comments</h2>
          <form method="POST" action={`${data.place.id}/rant`}>
              <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input className="form-control" type="text" name="author" id="author" required />
              </div>
              <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <textarea className="form-control" name="content" id="content"></textarea>
              </div>
              <div className="form-group">
                  <label htmlFor="stars">Star Rating</label>
                  <input className="form-control" type="number" min="0" max="5" step="0.5" name="stars" id="stars" required />
              </div>
              <div className="form-group">
                  <label htmlFor="rant">Rant:&nbsp;</label>
                  <input type="checkbox" name="rant" id="rant" required />
              </div>
              <input type="submit" value="Post Comment" />
          </form>
          <hr />
          {comments}
        </div>
      </main>
    </Def>
  )
}

module.exports = show;