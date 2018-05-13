"use strict";

const registerUserRoutes = require('./user');
const registerMenuRoutes = require('./menu');
const registerProfileRoutes = require('./profile');

module.exports = router => {
    registerUserRoutes(router);
    registerMenuRoutes(router);
    registerProfileRoutes(router);
};
