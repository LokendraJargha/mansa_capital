import { Schema, model, models } from 'mongoose';

const backtestSchema = new Schema({

    balance_in_usd: {
        type: Number,
        required: true
    },
    pairs: {
        type: String,
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
    strategy: {
        type: String,
        required: true,
    },
    session_name: {
        type: String
    },
    description: {
        type: String
    }

});
export default models.Backtest || model('Backtest', backtestSchema);