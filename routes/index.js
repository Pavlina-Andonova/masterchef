"use strict";

const registerUserRoutes = require('./user');
const registerMenuRoutes = require('./menu');

module.exports = router => {
    registerUserRoutes(router);
    registerMenuRoutes(router);
};
