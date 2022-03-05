const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const schema = mongoose.Schema;

const project = new schema({
   overView:{
      type: String,
      unique: true,
      min: (10),
      max: (100),
   },
   overViewFile:{ //video
      type: String
   },
   features: {
      type: String,
      min: (40),
      max: (100)
   },
   featuresFile:{
      type: String
   },
   homeDetails:{
      type: String,
      min:(30),
      max:(100)
   },
   homeDetailsFile:{
      type: String
   },
   paymentPlan:{
      type: String
   }
},
{
   timestamps: true
})

module.exports = mongoose.model("project", project)