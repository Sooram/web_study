var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FoodSchema = Schema(
    {
        original_name: {type: String, required: true, max: 100},
        en_name: {type: String, required: true, max: 100},
        summary: {type: String},
        detail: {type: String},
        country: {type: Schema.ObjectId, ref: 'Country'}
    }
);

FoodSchema
 .virtual('name')
 .get(function () {
    return this.original_name + ' (' + this.en_name + ')';
});

FoodSchema
 .virtual('url')
 .get(function () {
    return '/catalog/food/' + this._id;
})