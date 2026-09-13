const Trip = require('../models/travlr');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec();
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json(err);
    }
};

const tripsFindCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode }).exec();

        if (!trip) {
            return res.status(404).json({ message: 'Trip code not found' });
        }

        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json(err);
    }
};

const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = await Trip.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        res.status(201).json(newTrip);
    } catch (err) {
        res.status(400).json(err);
    }
};

const tripsUpdateOne = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode }).exec();

        if (!trip) {
            return res.status(404).json({ message: 'Trip code not found' });
        }

        trip.code = req.body.code;
        trip.name = req.body.name;
        trip.length = req.body.length;
        trip.start = req.body.start;
        trip.resort = req.body.resort;
        trip.perPerson = req.body.perPerson;
        trip.image = req.body.image;
        trip.description = req.body.description;

        const updatedTrip = await trip.save();

        res.status(200).json(updatedTrip);
    } catch (err) {
        res.status(500).json(err);
    }
};

const tripsDeleteOne = async (req, res) => {
    try {
        const trip = await Trip.findOneAndDelete({
            code: req.params.tripCode
        }).exec();

        if (!trip) {
            return res.status(404).json({
                message: 'Trip code not found'
            });
        }

        res.status(204).json(null);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateOne,
    tripsDeleteOne
};