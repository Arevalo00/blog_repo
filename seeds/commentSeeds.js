const {Comment} = require('../models');

const commentIfo = [
    {
        userID: 1,
        comment_text: 'hi'

    },
    {
        userID:2,
        comment_text: 'this is so cool'
    },
    {
        userID:3,
        comment_text: 'So helpful'
    }
]

const seedComments = () => Comment.bulkCreate(commentIfo);

module.exports = seedComments;