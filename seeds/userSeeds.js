 const {User} = require('../models');

const userInfo = [
    {
        username: 'happy123',
        email: 'happy123@gmail.com',
        password: 'abc123'
    },
    {
        username: 'gabby00',
        email: 'gabby00@yahoo.com',
        password: '1234'
    },
    {
        username: 'Swifti97',
        email:'iluvTaylor@aol.com',
        password: 'taylorForever'
    }
];

const seedUser = () => User.bulkCreate(userInfo, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;