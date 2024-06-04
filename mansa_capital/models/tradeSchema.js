import { Schema, model, models } from 'mongoose';

const tradeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

});
export default models.TradeSchema || model('TradeSchema', tradeSchema);