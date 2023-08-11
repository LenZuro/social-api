const { Users , Statment , Reaction } = require("../models");
const mongoose = require('mongoose');
const connection = require('../config/connection');

const users = [
    {
        username: "LenZuro",
        email: "leonardzuro@gmail.com",
        statment : [],
    },
];

console.log(connection);

connection.once("open" , async () => {
    console.log("Connected!");

    await Users.deleteMany({});

    await Users.collection.insertMany(users);

    console.table(users);
    console.info("Seeding is Done");
    process.exit(0);
});