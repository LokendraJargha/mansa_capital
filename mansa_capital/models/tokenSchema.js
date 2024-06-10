import { Schema, model, models } from 'mongoose';
import { ref } from 'yup';
const tokenSchema = new Schema({

    token:{
        type: String,
        required: true,
    }
    ,
    user :{
        type: Schema.Types.ObjectId,
        ref: 'UserAccount',
    }
});
export default models.Token || model('Token', tokenSchema);