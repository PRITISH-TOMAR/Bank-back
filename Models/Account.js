const { model, Schema } = require('mongoose');

const accountSchema = new Schema({
    IFSC_code: {
        type: String,
        required: true,
        unique:true
    },
    branch: {
        type: String,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    number:
    {
        type:Number,
        required: true,
        unique:true
    },
    holder:
    {
        type:String,
        required: true
    },
    user_reference: {
        type: Schema.Types.ObjectId,
        ref: 'user',  // user model
    }
}, { timestamps: true });

// Create the Anime model
const Account = model('account', accountSchema);
module.exports = { Account };
