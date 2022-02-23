const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req ,res) => {
    User.findAll({
        where: {
            id: req.session.id
        },
        attributes: [
            "id",
            "firstname",
            "lastname",
            "username",
            "email",
            "address"
        ]
    })
    .then((dbUserData) => {
        const users = dbUserData.map((users) =>{
        users.get({ plain: true })
        });
        res.render("profile", { users, loggedIn: true});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;