const {Schema , model} = require('mongoose');
const reactionsSchema = require('./Reaction');

const statmentSchema = new Schema({
        statmentText: {type: String , required: true , maxlength: 280 , minlength: 1,},
        createdAt: {type: Date , defualt: Date.now,},
        reactions: [reactionsSchema],
    },
    {
        toJSON:{virtuals:true,},
        id: false,
    }
);

statmentSchema.virtual('reactionsCount').get(function (){
    return this.reactions.length;
});

const Statment = model('statment' , statmentSchema);

module.exports = Statment;