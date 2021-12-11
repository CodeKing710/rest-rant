const router = require('express').Router();
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
}]

//INDEX PAGE ROUTES
router.get('/', (req,res) => {
    res.render('places/index', {places});
});
router.post('/', (req, res) => {
    // console.log(req.body);
    if(!req.body.pic)
        req.body.pic = 'http://placekitten.com/400/400';
    
    if(!req.body.city)
        req.body.city = 'Anytown';

    if(!req.body.state)
        req.body.state = 'USA'

    places.push(req.body);
    res.redirect('/places');
});

//NEW PLACE FORM ROUTE
router.get('/new', (req,res) => {
    res.render('places/new');
});

//SHOW PLACE ROUTES
router.get('/:id', (req,res) => {
    let id = Number(req.params.id);
    if(isNaN(id) || !places[id]) {
        res.render('error404');
    } else {
        res.render('places/show', {place:places[id],i:id});
    }
});

//PUT ROUTE
router.put('/:id/', (req,res) => {
    let id = Number(req.params.id);
    if(isNaN(id) || !places[id]) {
        res.render('error404');
    } else {
        if(!req.body.pic)
            req.body.pic = 'http://placekitten.com/400/400';

        if(!req.body.city)
            req.body.city = 'Anytown';

        if(!req.body.state)
            req.body.state = 'USA';

        places[id] = req.body;
        res.redirect(`/places/${id}`);
    }
});

//DELETE ROUTE
router.delete('/:id', (req,res) => {
    let id = Number(req.params.id);
    if(isNaN(id) || !places[id]) {
        res.render('error404');
    } else {
        places.splice(id, id+1);
        res.redirect('/places');
    }
});

//EDIT ROUTE
router.get('/:id/edit', (req,res) => {
    let id = Number(req.params.id);
    if(isNaN(id) || !places[id]) {
        res.render('error404');
    } else {
        res.render('places/edit', {place:places[id],i:id});
    }
});

module.exports = router;