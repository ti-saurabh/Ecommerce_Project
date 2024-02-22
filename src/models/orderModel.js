const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema({
userId:{
    type: ObjectId,
    ref:"User",
    required: true
},

items:[{
    productId: {
       type:  ObjectId,
       ref:"product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
       
    }
    }],

    totalPrice: {
        type: Number,
        required: true
        
    },
    totalItems: {
     type: Number,
     required: true
    
    },
    totalQuantity: {
        type: Number,
        required: true
        
    },
    cancellable: {
        type: Boolean,
        default: true
    },
    status: {
        type: String,
        default: 'pending',
        enum: ["pending","completed", "cancelled"]
    },

    deletedAt: {
        type: Date
        
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})

module.exports = mongoose.model('Order', orderSchema)