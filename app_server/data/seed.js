const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const trips = require('../../data/trips.json');

const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;

mongoose.connect(dbURI);

const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    console.log('Trips database seeded successfully');
    mongoose.connection.close();
};

seedDB();