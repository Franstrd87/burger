const connection = require("./connection");

var orm = {
    selectAll: function(){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, res) {
            if (err) throw err;
        });
    },

    insertOne: function(name) {
        var queryString = "INSERT INTO burgers ('burger', 'devoured') VALUES ( ??, FALSE)";
        connection.query(queryString, [name], function(err, res){
            iff (err) throw err;
        });
    },

    updateOne: function(i) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ??";
        connection.query(queryString, [i], function(err, res) {
            if (err) throw err;
        });
    }
};

module.exports = orm;