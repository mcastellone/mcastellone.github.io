const Trip = require('../../app_api/models/travlr');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec();
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json({
            message: 'Error retrieving trips',
            error: err
        });
    }
};

const tripsAddTrip = async (req, res) => {
    try {
        const trip = await Trip.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        res.status(201).json(trip);

    } catch (err) {
        res.status(400).json({
            message: 'Error creating trip',
            error: err
        });
    }
};

module.exports = {
    tripsList,
    tripsAddTrip
};