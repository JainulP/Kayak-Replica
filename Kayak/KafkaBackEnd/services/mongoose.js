"use strict";

var mongoose = require("mongoose");
var mongooseGM = require("mongoose-gm");
var mongoDbUrl = "mongodb://root:root@ds159235.mlab.com:59235/kayak";

mongoose.Promise = global.Promise;
var options={
    useMongoClient: true,
};

var connection = mongoose.connect(mongoDbUrl,options);
var Schema = mongoose.Schema;

var hotelSchema = new Schema({
	"hotel_id":{type:Number, required:true},
	"image":{type:String},
	"amenities":{type:Array},
	"free_cancel_delux": {type:Boolean},
    "free_cancel_standard": {type:Boolean},
    "free_cancel_king": {type:Boolean},
    "free_cancel_queen": {type:Boolean},
    "free_cancel_double": {type:Boolean},
	"delux_bed_type": {type: String},
    "standard_bed_type": {type: String},
    "king_bed_type": {type: String},
    "queen_bed_type": {type: String},
    "double_bed_type": {type: String},
    "room_img":{type:Array},
});


hotelSchema.plugin(mongooseGM);

var userSchema = new Schema({
	"user_id":{type:Number, required:true}
});
userSchema.plugin(mongooseGM);


var reviewsByUserSchema = new Schema({
	"booking_id":{type:String, required:true},
	"user_id":{type:String, required:true},
    "hotel_id":{type:String, required:true},
	"rating":{type:String, required:true},
	"review_content":{type:String, required:true},
	"user_name":{type:String,required:true},
	"hotel_name":{type:String, required:true},
	"positives":{type: String},
	"negatives":{type:String}
});


reviewsByUserSchema.plugin(mongooseGM);


var hotel = mongoose.model('hotel',hotelSchema,'hotel');
var reviewByUser = mongoose.model('reviewByUser',reviewsByUserSchema,'reviewByUser');
var user = mongoose.model('user',userSchema,'user');

exports.hotel = hotel;
exports.reviewByUser = reviewByUser;
exports.user = user;