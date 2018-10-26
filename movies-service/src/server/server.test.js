const test = require('tape');

const server = require('./server');

function apiMock(app,repository){
    console.log('do nothing')
}

function runTests(){

    test('Server Start',(t)=>{
        server.start(apiMock,null,(err,server)=>{
            t.assert(!err && server, "Server Started")
            t.end()
        })
    })

    test("Server Stop",(t)=>{
        t.assert(server.stop(), "Server Stopped")
        t.end()
    })

}

module.exports = { runTests}