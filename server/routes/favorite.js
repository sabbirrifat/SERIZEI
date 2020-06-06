const express = require('express');
const router = express.Router();


const { Favorite } = require("../models/Favorite");

const { auth } = require("../middleware/auth");

//=================================
//             Subscribe
//=================================


router.post("/favoriteNumber", (req, res) => {

    Favorite.find({ "seriesId": req.body.seriesId })
        .exec((err, subscribe) => {
            if (err) return res.status(400).send(err)

            res.status(200).json({ success: true, subscribeNumber: subscribe.length })
        })

});



router.post("/favorited", (req, res) => {

    Favorite.find({ "seriesId": req.body.seriesId, "userFrom": req.body.userFrom })
        .exec((err, subscribe) => {
            if (err) return res.status(400).send(err)

            let result = false;
            if (subscribe.length !== 0) {
                result = true
            }

            res.status(200).json({ success: true, subcribed: result })
        })

});



router.post("/addToFavorite", (req, res) => {

    
    const favorite = new Favorite(req.body);

    favorite.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});


router.post("/removeFromFavorite", (req, res) => {


    Favorite.findOneAndDelete({ seriesId: req.body.seriesId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true, doc })
        })
});


router.post("/getFavoredSeries", (req, res) => {

    //Need to find all of the Users that I am subscribing to From Subscriber Collection 
    Favorite.find({ 'userFrom': req.body.userFrom })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json({ success: true, favorites })
        })
});



module.exports = router;
