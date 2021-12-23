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

router.put('/:id', async (req, res) => {
    try {
        await db.Place.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/places/${req.params.id}`);
    } catch(e) {
        console.log(e);
        res.render('error404');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let place = await db.Place.findByIdAndDelete(req.params.id);
        res.redirect('/places');
    } catch (e) {
        console.log(e);
        res.render('error404');
    }
});

router.get('/:id/edit', async (req, res) => {
    try {
        let place = await db.Place.findById(req.params.id);
        res.render('places/edit', {place});
    } catch(e) {
        console.log(e);
        res.render('error404');
    }
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