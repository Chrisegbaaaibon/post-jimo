const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

describe('GET /api/projects', () => { 
   it('should response the admin with all projects', async()=>{
      const response = request.get('/api/projects');
      expect((await response).statusCode).toBe(200);
      expect((typeof await response).body.projects).toBe('object');
   });
});