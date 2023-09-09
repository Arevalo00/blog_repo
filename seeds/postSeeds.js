const {Post} = require ('../models');

const postInfo = [
    {
        title: 'Javascript info',
        post_text: 'this was so helpful thanks!',
        userID: 1
    },
    {
        title: 'CSS Tips',
        post_text: 'thanks your tips really work',
        userID: 2

    },
    {
        title: 'Random but Helpful',
        post_text:' I had no idea these thing worked, but now i can not live with out them.',
        userID: 3

    }

]

const seedPost = () => Post.blukcreate(postInfo); 

module.exports = seedPost; 