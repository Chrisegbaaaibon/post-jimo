const routes = require('express').Router()
const { addProject, updateProject, projects, deleteProject, addProjectFile } = require('../handler/controller')
const upload = require('../upload/multer');


routes.post('/add', addProject, upload.array('image'), addProjectFile)


routes.get('/projects', projects);

routes.patch('/:_id', updateProject);

routes.delete('/:_id', deleteProject)

module.exports = routes