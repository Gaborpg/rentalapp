
const express = require('express');
const Rental = require('../models/rental');
const router = express.Router();


router.get('', function (req, res) {
  Rental.find({},function (err, foundRentals) {
     res.json(foundRentals);

  });
});

router.get('/:id', function (req, resp) {
  const rentalId = req.params.id;

  Rental.findById(rentalId, function (err, foundRental) {
    if (err || !foundRental){
      return resp.status(422).send({errors: [{title:'Rental Error', detail:'Could not find Rental!'}]});
    }
      resp.json(foundRental);

  });
});

module.exports = router;
