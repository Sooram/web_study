var express = require('express');
var router = express.Router();

// Require controller modules
var restaurant_controller = require('../controllers/countryController');
var food_controller = require('../controllers/foodController');
var country_controller = require('../controllers/restaurantController');

/// RESTAURANT ROUTES ///

/* GET catalog home page. */
router.get('/', restaurant_controller.index);

/* GET request for creating a Restaurant. NOTE This must come before routes that display Restaurant (uses id) */
router.get('/restaurant/create', restaurant_controller.restaurant_create_get);

/* POST request for creating Restaurant. */
router.post('/restaurant/create', restaurant_controller.restaurant_create_post);

/* GET request to delete Restaurant. */
router.get('/restaurant/:id/delete', restaurant_controller.restaurant_delete_get);

// POST request to delete Restaurant
router.post('/restaurant/:id/delete', restaurant_controller.restaurant_delete_post);

/* GET request to update Restaurant. */
router.get('/restaurant/:id/update', restaurant_controller.restaurant_update_get);

// POST request to update Restaurant
router.post('/restaurant/:id/update', restaurant_controller.restaurant_update_post);

/* GET request for one Restaurant. */
router.get('/restaurant/:id', restaurant_controller.restaurant_detail);

/* GET request for list of all Restaurant items. */
router.get('/restaurants', restaurant_controller.restaurant_list);

/// FOOD ROUTES ///

/* GET request for creating Food. NOTE This must come before route for id (i.e. display food) */
router.get('/food/create', food_controller.food_create_get);

/* POST request for creating Food. */
router.post('/food/create', food_controller.food_create_post);

/* GET request to delete Food. */
router.get('/food/:id/delete', food_controller.food_delete_get);

// POST request to delete Food
router.post('/food/:id/delete', food_controller.food_delete_post);

/* GET request to update Food. */
router.get('/food/:id/update', food_controller.food_update_get);

// POST request to update Food
router.post('/food/:id/update', food_controller.food_update_post);

/* GET request for one Food. */
router.get('/food/:id', food_controller.food_detail);

/* GET request for list of all Foods. */
router.get('/foods', food_controller.food_list);

/// COUNTRY ROUTES ///

/* GET request for creating a Country. NOTE This must come before route that displays Country (uses id) */
router.get('/country/create', country_controller.country_create_get);

/* POST request for creating Country. */
router.post('/country/create', country_controller.country_create_post);

/* GET request to delete Country. */
router.get('/country/:id/delete', country_controller.country_delete_get);

// POST request to delete Country
router.post('/country/:id/delete', country_controller.country_delete_post);

/* GET request to update Country. */
router.get('/country/:id/update', country_controller.country_update_get);

// POST request to update Country
router.post('/country/:id/update', country_controller.country_update_post);

/* GET request for one Country. */
router.get('/country/:id', country_controller.country_detail);

/* GET request for list of all Country. */
router.get('/countrys', country_controller.country_list);


module.exports = router;