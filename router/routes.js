const routes = require('express').Router()
const { addProject, updateProject, projects, deleteProject } = require('../handler/controller')


routes.post('/add', addProject);

routes.get('/projects', projects);

routes.patch('/:_id', updateProject);

routes.delete('/:_id', deleteProject)

module.exports = routes