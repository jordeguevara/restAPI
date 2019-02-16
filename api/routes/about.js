const express = require('express');
const router = express.Router();

router.get('/name', (req, res, next) => {
    res.status(200).json({
        name: 'Jorde Guevara'
    });
});

router.get('/location', (req, res, next) => {
    res.status(200).json({
        city: 'Redondo Beach',
        state: 'CA'
    });
});

router.get('/position', (req, res, next) => {
    res.status(200).json({
        title: 'Software Engineer'
    });
});





module.exports = router;