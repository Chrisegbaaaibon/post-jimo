const multer = require('multer');

const storage = multer.diskStorage({
   destination: (req, file, cb)=>{
      cb(null, './jimo-uploads')
   },
   filename: (req, file, cb)=>{
      cb(null, new Date().toISOString()+'-'+file.originalname)
   }
});

const fileFilter = (req, file, cb)=>{
   if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
      cb(null, true);
   }else{
      // reject file
      cb({message: 'Unsupported file format'}, false);
   };
};


const upload =multer({
   storage: storage,
   limits: {fileSize: 1024 * 1024  },
   fileFilter: fileFilter
});

module.exports = upload;