const express = require('express');
const userRoutes = require('./user/user.routes');
const tweetRoutes = require('./tweet/tweet.routes');
const followRoutes = require('./follow/follow.routes');

const router = express.Router();
router.get('/api-status', (req, res) =>
    res.json({
        status: 'ok'
    })
);
router.use('/user', userRoutes);
router.use('/tweet', tweetRoutes);
router.use('/follower', followRoutes);

module.exports = router;
