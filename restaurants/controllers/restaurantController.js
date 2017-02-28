var Restaurant = require('../models/restaurant');

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all restaurants
exports.restaurant_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Restaurant list');
};

// Display detail page for a specific restaurant
exports.restaurant_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Restaurant detail' + req.params.id );
};

// Display book create form on GET
exports.restaurant_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Restaurant create GET' );
};

// Handle book create on POST
exports.restaurant_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Restaurant create POST' );
};

// Display book delete form on GET
exports.restaurant_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Restaurant delete GET' );
};

// Handle book delete on POST
exports.restaurant_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Restaurant delete POST' );
};

// Display book update form on GET
exports.restaurant_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Restaurant update GET' );
};

// Handle book update on POST
exports.restaurant_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Restaurant update POST' );
};