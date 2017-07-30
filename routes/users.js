let express = require('express');
let router = express.Router();
let userRepository = require('repositories/userRepo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.sendfile(__dirname, index)
});

/* POST create new user */
router.post('/', function(req, res, next) {
    let user = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        gender : req.body.gender
    };

    userRepository.createUser(user)
        .then(savedUserId => {
            res.status(201).json({
                id: savedUserId
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
});


module.exports = router;
