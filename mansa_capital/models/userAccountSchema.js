import { LassoSelect } from 'lucide-react';
import { Schema, model, models } from 'mongoose';
import { defaultConfig } from 'next/dist/server/config-shared';
const UserAccountSchema = new Schema({
    account_number: {
        type: String,
        required: true,
        unique: true,
    },
    account_type: {
        type: String,
        required: true,
    },
    leverage: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // trade_entry_method: {
    //     type: String,
    //     required: true,
    // },
    trade_size: {
        type: String,
        required: true,
    },
    signal_delivery_over: {
        type: String,
        required: true,
        default:"sandiprade"
    },
    trading_dtyle: {
        type: String,
        required: true,
    },
    csv: {
        type: String,
        required: true,
    },
    created_by: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastLoggedIn: {
        type: Date,
        default: Date.now,
    }
});
const UserAccount = models.UserAccount || model('UserAccount', UserAccountSchema);

export default UserAccount;