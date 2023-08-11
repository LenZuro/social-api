const router = require("express").Router();
const usersRoutes = require("./usersRoutes");
const statmentRoutes = require("./statmentRoutes");

router.use("/users" , usersRoutes);
router.use("/statments" , statmentRoutes);

module.exports = router;