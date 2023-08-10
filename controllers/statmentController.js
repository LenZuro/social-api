const {Users , Statment} = require("../models");

const statmentController = {
    async getStatments(req ,res){
        try{
            const statments = await Statment.find();
            return res.status(200).json(statments);
        } catch (err){
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getStatment(req ,res){
        try{
            const statment = await Statment.findOne({ _id: req.params.statmentId});

            if (!statment){
                return res.status(404).json({ message: "no Statment with that Id" });
            }
            return res.status(200).json(statment);
        } catch (err){
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createStatment(req, res) {
        try{
            const statment = await Statment.create(req.body);
            const user = await Users.findByIdAndUpdate(
                req.body.userId , { $addToSet: {statments: statment._id} } , 
                {runValidators: true , new: true}
            );
            return res.status(200).json({statment , user});
        }catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async updateStatment(req, res) {
       try{
        const statment = await Statment.findOneAndUpdate(
            { _id: req.params.statmentId},
            { $set: req.body},
            {runValidators: true , new: true},
        );
        if (!statment) {
            return res.status(404).json({message: "No statment with this Id!"});
        }
        return res.status(200).json(statment);
       } catch (err){
        console.log(err);
        return res.status(500).json(err);
       }
    },

    

}