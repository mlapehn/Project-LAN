// Dependencies
var mongoose = require('mongoose');
var Event = require('./model.js');

// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all events in the db
    app.get('/api/events', function(req, res){

        // Uses Mongoose schema to run the search (empty conditions)
        var query = Event.find({});
        query.exec(function(err, events){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json(events);
        });
    });

    // POST Routes
    // --------------------------------------------------------
    // Provides method for saving new events in the db
    app.post('/api/events', function(req, res){

        // Creates a new event based on the Mongoose schema and the post bo.dy
        var newevent = new Event(req.body);
        console.log(newevent)

        // New User is saved in the db.
        newevent.save(function(err){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of the new user
            res.json(req.body);
        });
    });
};
