const mongoose = require('mongoose');
const {Schema, model}=mongoose;

const PostSchema = new Schema({
    title:String,
    summary:String,
    content:String,
    cover:String, //path to file inside uploads isliye string
    author: {type:Schema.Types.ObjectId, ref:'User'}, 
}, {
    timestamps: true,
});

const PostModel = model('Post', PostSchema);

module.exports=PostModel;