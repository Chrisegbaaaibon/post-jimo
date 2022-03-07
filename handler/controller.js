const project = require('../database/schema');
const cloudinary = require('../upload/cloudinary');
const fs = require('fs')

// Post project
exports.addProject = async(req, res, next)=>{
   try {
      let overView = req.body.overView;
      let features = req.body.features;
      let homeDetails = req.body.homeDetails;
      let paymentPlan = req.body.paymentPlan;
      
      if(!overView,  !features,  !homeDetails,  !paymentPlan){
      }else{
         let projectCreated = new project({overView,  features,  homeDetails,  paymentPlan});
         await projectCreated.save()
         console.log('Project Added');
         res.status(201).json({
            message: "Added🥳🥳",
            data: projectCreated
         })
      }
   } catch (error) {
      console.log(error)
   }
};

exports.addProjectFile =async (req, res)=>{
   try {
      const uploader = async (path)=> await cloudinary.uploads(path, 'Images');
      if(req.method === 'POST'){
         const urls = new project({overViewFile, featuresFile, homeDetailsFile });
         const  files = [req.files.overViewFile, req.files.featuresFile, req.files.homeDetailsFile ];
         for (file of files ){
            const { path } = file;
            const newPath  = await uploader( path )
            urls.push(newPath)
            fs.unlinkSync(path)
         }
         res.status(200).json({
            message: 'Uploaded!',
            data: urls
         })
      }else{
         res.status(405).json({
            err: `${req.method} method noot allowed!`
         })
      }
   } catch (error) {
      console.log(error);
   }
}


// Check all projects
exports.projects = (req, res)=>{
   project.find((err, projects )=>{
      if(err){
         console.log(err)
         res.status(401).json({
            message: "Couldn't retrieve projects"
         });
      }else{
         res.json({projects})
      }
   })
}

// To update project
exports.updateProject = (req, res, next)=>{
   project.findByIdAndUpdate(req.params._id, req.body, (err, project)=>{
      if(err){
         res.status(500).json({
            message: "Error while trying to update project "
         });
      }else{
         res.json({
            message: "Project updated Successfully!",
            data: project
         });
      };
   } );
};

// To delete project
exports.deleteProject = (req, res, next)=>{
   project.findByIdAndDelete(req.params._id, (err, del)=>{
      if(err){
         res.status(500).json({
            message: "Error occured while trying to remove the project!"
         });
      }else{
         res.json({
            message: "Project removed successfully"
         })
      }
   })
}