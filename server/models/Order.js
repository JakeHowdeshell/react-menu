const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  meals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
