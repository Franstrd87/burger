const orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.selectAll(function(res) {
            cb(res);
        });
    }
};

module.exports = burger;