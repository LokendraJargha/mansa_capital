import { Schema, model, models } from 'mongoose';

const backtestSchema = new Schema({

    balanceInUsd: {
        type: Number,
        required: true
    },
    pairs: {
        type: String,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    strategy: {
        type: String,
    },
    sessionName: {
        type: String
    },
    description: {
        type: String
    }

});
export default models.Backtest || model('Backtest', backtestSchema);