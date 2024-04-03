const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:Schema.Types.ObjectId ,
        ref : 'User', 
        require : true , 
    },
    author: { type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
     },
     createdAt: { 
        type: Date, 
        default: Date.now 
    },
     updatedAt: { 
        type: Date,
         default: Date.now 
    },
     category: { 
        type: Schema.Types.ObjectId,
         ref: 'Category'
    },
     tags: [{ type: String }],
     comments: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Comment' 
    }],
     likes: {
         type: Number,
          default: 0 
    },
     views: {
         type: Number, 
         default: 0 
    },
     featuredImage: {
         type: String 
    },
     isPublished: {
         type: Boolean,
          default: false 
    },
     slug: {
         type: String,
         unique: true
     },
     relatedPosts: [{
         type: Schema.Types.ObjectId,
          ref: 'Post'
     }],
     metaData: {
         description: { type: String },
         keywords: [{ type: String }]
     }

});

//Export the model
module.exports = mongoose.model('User', userSchema);