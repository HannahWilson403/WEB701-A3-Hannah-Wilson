const mongoose = require("mongoose");

const User = mongoose.model(   //possibly change this is there's an error again
"User",  
new mongoose.Schema({
username: String,
email: String,
password: String,
roles: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role"
    }
]
})
);

module.exports = User;