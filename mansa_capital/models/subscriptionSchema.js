import { Schema, model, models } from 'mongoose';
const subscriptionSchema = new Schema({

    type: {
        type: String,
        required: true,
    },
    // token:{
    //     type: String,
    //     required: true,
    // },
    email :{
        type: String,
        required: true,
    },

    first_name: {
        type: String,
        // required: true,
    },last_name: {
        type: String,
        // required: true,
    },createdBy: {
        type: String,
        // required: true,
    },billing_cycle: {
        type: String,
        required: true,
    },subscription_status: {
        type: String,
        required: true,
    },createdAt:{
        type: Date,
        default: Date.now,
        required: true,
    },endDate:{
        type: Date,
        required: true,
    }

});
export default models.Subscription || model('Subscription', subscriptionSchema);