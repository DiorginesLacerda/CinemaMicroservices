const test = require('tape');
const supertest = require('supertest')
const movies = require('./movies')
const server = require('../server/server.js');
const repository = require('../repository/repository.js');

function runTests(){
    
    server.start(movies,repository,(err,app)=>{
        var id = null
        test('GetAllMovies',t =>{
            supertest(app)
                .get('/movies')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) =>{
                    if(res.body && res.body.length > 0)
                        id = res.body[0]._id;
                    t.assert(res.body && res.body.length > 0, "All Movies returned")
                    t.end()
                })
        })

        test('GetMovieById',t =>{
            supertest(app)
                .get('/movies/'+id)
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err,res)=>{
                    t.assert(res.body && res.body._id == id, "Movie By Id Returned")
                    t.end()
                })
        })
    
        test('GetMoviePremieres',t =>{
            supertest(app)
                .get('/movies/premieres')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) =>{
                    t.assert(res.body && res.body.length > 0, "Premieres Movies returned")
                    t.end()
                })
                
        })
        server.stop()
    })
    
    
}
    

module.exports = { runTests }