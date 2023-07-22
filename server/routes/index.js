const express = require('express');
const userRoutes = require('./user/user.routes');

const router = express.Router();
router.get('/api-status', (req, res) =>
    res.json({
        status: 'ok'
    })
);
router.use('/user', userRoutes);

module.exports = router;
