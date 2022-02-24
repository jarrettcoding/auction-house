const router = require("express").Router();
const { User } = require("../../models");


// GET /api/users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// GET /api/users/1
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// POST /api/users to create account
router.post("/",(req, res) => {
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
  }).then((dbUserData) => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json(dbUserData);
    });
  });
});
//login route
router.post('/login',(req, res) => {
  //. expect email and password
  User.findOne({
      where: {
      username: req.body.username
      }
  }). then(dbUserData => {
      if(!dbUserData){
          res.status(400).json({message: 'wrong information'});
          return;
      }
      // verfiy password 
      const validPassword = dbUserData.checkPassword(req.body.password);
      if(!validPassword){
          res.status(400).json({message: 'Wrong information'})
          return;
      } 
      req.session.save(()=>{
          // declare session variables
          req.session.user_id = dbUserData.id
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;

          res.json({user:dbUserData, message: 'You are now logged in!'})
      });
  });
});
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;

