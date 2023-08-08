const { Schema , Types } = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionID: {type: Schema.Types.ObjectId , default: () => new Types.ObjectId(),},
        reactionText: {type: String , required: true , maxlength: 280 , minlength: 1 ,},
        username: {type: String , required: true,},
        createdAt: {type: Date , default: Date.now,},
    });

    module.exports = reactionsSchema;