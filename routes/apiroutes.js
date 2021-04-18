const express = require("express");
const router = require.Router();
const Workout = require("../");

router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
    .then(dbtrackworkout =>{
        res.json(dbtrackworkout);
    })
    .cath(err => {
        res.status(400).json(err);
    });
});

router.post("api/workout/bulk", ({ body }, res) => {
    Workout.insertMany(body)
    .then(dbtrackworkout => {
        res.json(dbtrackworkout);
    })
    .cath(err => {
        res.sttus(400).json(err);
    });
});

router.get("/api/workout", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then(dbtrackworkout => {
        res.json(dbtrackworkout);
    })
    .cath(err => {
        res.status(400).json(err);
    });
});

module.exports = router;