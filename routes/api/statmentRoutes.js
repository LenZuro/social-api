const router = require('express').Router();

const {
    getStatments ,
    getStatment ,
    createStatment,
    updateStatment ,
    deleteStatment ,
    addReaction ,
    deleteRaction,

} = require("../../controllers/statmentController");

router.route('/').get(getStatments).post(createStatment);

router.route("/:statmentId").get(getStatment).put(updateStatment).delete(deleteStatment);

router.route("/:statmentId/reactions").post(addReaction);

router.route('/:statmentId/reactions/:reactionId').delete(deleteRaction);

module.exports = router;