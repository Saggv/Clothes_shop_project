const Product = require("./Product");
const TrendWeekImg = require("./TrendWeekImg");
const SlideImg = require("./SlideImg");
const Show = require("./Show");
const User = require("./User");
const Booking = require("./Booking");
const Cart = require("./Cart");
module.exports = {
    ...Product,
    ...TrendWeekImg,
    ...SlideImg,
    ...Show,
    ...User,
    ...Booking,
    ...Cart
}