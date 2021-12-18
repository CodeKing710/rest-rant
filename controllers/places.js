const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Place.find().then(places => {
        res.render('places/index', {places});
    }).catch(e =>{
        console.log(e);
        res.render('error404');
    });
});

router.post('/', (req, res) => {
    db.Place.create(req.body).then(() => {
        res.redirect('/places');
    }).catch(e => {
        console.log(e);
        res.render('error404');
    });
});

router.get('/new', (req, res) => {
    res.render('places/new')
});

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id).populate('comments').then((place)=>{
        console.log(place.comments);
        res.render('places/show', {place});
    }).catch((e)=>{
        console.log(e);
        res.render('error404');
    });
});

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
});

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
});

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
});

router.post('/:id/rant', async (req, res) => {
    req.body.rant = req.body.rant ? true : false;
    let place = await db.Place.findById(req.params.id);
    try {
        let comment = await db.Comment.create(req.body);
        try {
            place.comments.push(comment.id);
            await place.save();
            res.redirect(`/places/${req.params.id}`);
        } catch (e) {
            console.log(e);
            res.render('error404');
        }
    } catch (e) {
        console.log(e);
        res.render('error404');
    }
});

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
});

module.exports = router;