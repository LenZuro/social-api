const { Users , Statment } = require("../models");
const { create } = require("../models/Users");

const userController = {
    async getUsers (req, res){
        try{
            const users = await Users.find().select("-__v")
                // .populate({ path: "statments" , select: "-__v"})
                // .populate({ path: "friends" , select: "-__v"});
            return res.status(200).json(users)
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getUser (req ,res){
        try{
            const user =  Users.findOne({ _id: req.params.userId })
            .populate({ path: "statments" , select: "-__v" })
            .populate({ path: 'friends' , select: "-__v"});
            if(!user){
                return res.status(404).json({ message: "No user with that Id" });
            }
            return res.status(200).json(user);
        }catch (err){
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createUser( req , res){
        try {
            const user = await Users.create(req.body);
            return res.status(200).json(user);
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
          const user = await Users.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
          );
          if (!user) {
            return res.status(404).json({ message: "No user with this id!" });
          }
          return res.status(200).json(user);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },

      async deleteUser(req, res) {
        try {
          const user = await Users.findOneAndDelete({ _id: req.params.userId });
          if (!user) {
            return res.status(404).json({ message: "No user with that ID" });
          }
          await Thought.deleteMany({ _id: { $in: user.thoughts } });
          return res.status(200).json({
            message: "User and associated thoughts and reactions deleted!",
          });
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },

      async addFriend(req, res) {
        try {
          const friend = await Users.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
          );
          if (!friend) {
            return res.status(404).json({ message: "No user with that ID" });
          }
          return res.status(200).json(friend);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },

      async deleteFriend(req, res) {
        try {
          const friend = await Users.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
          );
         if (!friend) {
            return res.status(404).json({ message: "Check user and friend ID" });
          }
          return res.status(200).json(friend);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },

};

module.exports = userController;