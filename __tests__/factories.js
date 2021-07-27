const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

factory.define('User', User, {
    name: 'Diego',
    email: 'diego@gmail.com',
    password: '123123'
});

module.exports = factory;