const project = require('../database/schema');

// Post project
exports.addProject = async(req, res, next)=>{
   try {
      let overView = req.body.overView;
      let overViewFile = req.body.overViewFile;
      let features = req.body.features;
      let featuresFile = req.body.overViewFile;
      let homeDetails = req.body.homeDetails;
      let homeDetailsFile = req.body.homeDetailsFile;
      let paymentPlan = req.body.paymentPlan;
      
      if(!overView, !overViewFile, !features, !featuresFile, !homeDetails, !homeDetailsFile, !paymentPlan){
        let okay = confirm('Wanna go ahead with this?');
        alert(okay);
      }else{
         let projectCreated = new project({overView, overViewFile, features, featuresFile, homeDetails, homeDetailsFile, paymentPlan});
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
   
};

// To delete project
exports.deleteProject = (req, res, next)=>{

}