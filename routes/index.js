"use strict";

const registerUserRoutes = require('./user');
const registerMenuRoutes = require('./menu');
const registerProfileRoutes = require('./profile');
const registerChefRoutes = require('./chef');

module.exports = router => {
    registerUserRoutes(router);
    registerMenuRoutes(router);
    registerProfileRoutes(router);
    registerChefRoutes(router);
};
