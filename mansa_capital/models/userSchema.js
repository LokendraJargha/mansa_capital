import { LassoSelect } from 'lucide-react';
import { Schema, model, models } from 'mongoose';
const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
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
export default  model('User', UserSchema);