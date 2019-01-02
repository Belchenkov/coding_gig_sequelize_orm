const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// Get gig list
router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => {
            res.render('gigs', {
                gigs
            });
        })
        .catch(err => console.log(err));
});

// Add a gig
router.get('/add', (req, res) => {
    const data = {
        title: 'Simple Nodejs Website',
        technologies: 'nodejs, js, html, css',
        budget: '$1000',
        description: ' Etiam elit leo, lacinia sit amet sapien ac, feugiat hendrerit lorem. Duis sem odio, bibendum ac interdum sit amet, volutpat non est. Sed blandit dolor eget purus euismod, vel elementum mi pretium. Donec maximus, turpis ut gravida pretium, mi felis consequat mi, sed eleifend massa eros sit amet lectus. Phasellus quis nunc sit amet ipsum convallis dictum at non sapien. Nam scelerisque sodales arcu, ac tincidunt risus pretium in.',
        contact_email: 'user2@gmail.com'
    };

    let {title, technologies, budget, description, contact_email} = data;

    // Insert to table
    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email
    })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});

module.exports = router;