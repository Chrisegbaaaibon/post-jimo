const routes = require('express').Router()

routes.get("/projects", (req, res)=>{
   res.send("projects!")
})

module.exports = routes