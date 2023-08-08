const { Schema , model } = require('mongoose');

const usersSchema = new Schema(
    {
        username: {type: String , unique: true , required: true , trim: true,},
        email: {type: String , required: true , unique: true , match: [/.+@.+\..+/ , "Must match a current email adress."],},
        statment: [{type: Schema.Types.ObjectId, ref: "statment",},],
        friends: [{type: Schema.Types.ObjectId , ref: "users",},],
    },
    {
        toJSON:{virtuals: true,},
        id: false,
    }
);

usersSchema.virtual('friendsNum').get(function () {
    return this.friends.length;
});

const Users = model('users' , usersSchema);

module.exports = Users;