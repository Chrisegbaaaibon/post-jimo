const cloudinary = require('cloudinary').v2;

require('dotenv').config();

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET
})

exports.uploads = (file, folder)=>{
   return new Promise(resolve =>{
      cloudinary.uploader.upload(file, (result)=>{
         resolve({
            url: result.url,
            id: result.id
         });
      },{
         resource_type: "auto",
         folder: folder
      });
   });
};