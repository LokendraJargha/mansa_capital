import { LassoSelect } from 'lucide-react';
import { Schema, model, models } from 'mongoose';
const CustomisationSchema = new Schema({
    screen_mode: {
        type: String,
        required: true,
    },
    base_timezone: {
        type: String,
        required: true,
    },
    base_currency: {
        type: String,
        unique: true,
        required: true,
    },
    date_format: {
        type: String,
        required: true,
    },
    created_by: {
        unique: true,
        type: String,
        required: true,
        index: true,
    },
    language: {
        type: String,
        default: Date.now,
    },
    font_size: {
        type: String,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
const Customisation = models.Customisation || model('Customisation', CustomisationSchema);

export default Customisation;