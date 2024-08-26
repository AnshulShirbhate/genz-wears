const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, default:''},
    pincode: {type: String,  default:''},
    phoneno: {type: String,  default:''},
}, {timestamps: true});

// mongoose.models = {}
// export default mongoose.model("User", userSchema);
//OR
export default mongoose.models.User || mongoose.model("User", userSchema);