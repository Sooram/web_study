var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RestaurantSchema = Schema(
    {
        original_name: {type: String, required: true, max: 100},
        en_name: {type: String, required: true, max: 100},
        food: [{type: Schema.ObjectId, ref: 'Food', required: true}],
        detail: {type: String},
        country: {type: Schema.ObjectId, ref: 'Country', required: true},
        location: {type: String},
        map_url: {type: String, required: true},
        star: {type: String, enum: ['★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★']},
    }
);

RestaurantSchema
 .virtual('url')
 .get(function () {
    return '/catalog/restaurant/' + this._id;
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);