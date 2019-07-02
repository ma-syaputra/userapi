let validator = require('validator')
var definition = {
    id: {type: String},
    createdAt:{type:Date,default: Date.now},
    isActive: {
        type: Boolean,
        default: false
    },
    username : {
        type:String,
        index: {unique: true, dropDups: true}
    },
    password : {type:String},
    email : {
        type:String,
        index: {unique: true, dropDups: true}
        },
    notes : {type: String},
    lastUpdated:{type:Date},
};
module.exports.definitionUser = definition;